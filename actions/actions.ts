"use server"

import { writeFile } from "fs/promises"
import path from "path"

import { ROUTES } from "@/constants/routes"
import prisma from "@/lib/prisma"
import { Filters } from "@/types"

export const getContacts = async (filters: Filters = {}) => {
  const filter = {
    contains: filters.search || "",
    mode: "insensitive",
  } as const

  const contacts = await prisma.contact.findMany({
    where: {
      active: true,
      yearMet: filters.year,
      favorite: filters.favorite,
      OR: [
        {
          name: filter,
        },
        {
          lastname: filter,
        },
        {
          address: filter,
        },
        {
          notes: filter,
        },
        {
          Social: {
            some: {
              username: filter,
            },
          },
        },
        {
          Social: {
            some: {
              platform: {
                name: filter,
              },
            },
          },
        },
        {
          Number: {
            some: {
              number: filter,
            },
          },
        },
        {
          Email: {
            some: {
              email: filter,
            },
          },
        },
        {
          Alias: {
            some: {
              alias: filter,
            },
          },
        },
      ],
    },
    select: {
      id: true,
      name: true,
      lastname: true,
      photo: true,
      birthday: true,
      address: true,
      notes: true,
      yearMet: true,
      favorite: true,
      createdAt: true,
      Social: {
        select: {
          id: true,
          username: true,
          label: true,
          platform: true,
        },
      },
      Number: {
        select: {
          id: true,
          number: true,
          type: true,
          label: true,
        },
      },
      Email: {
        select: {
          id: true,
          email: true,
          type: true,
          label: true,
        },
      },
      Alias: {
        select: {
          id: true,
          alias: true,
        },
      },
    },
    orderBy: [{ name: "asc" }, { lastname: "asc" }],
  })

  return contacts
}

export const upsertContact = async (data, formData) => {
  const {
    id: contactId,
    name,
    lastname,
    birthday,
    address,
    yearMet,
    notes,
    removePhoto,
    Alias,
    Number,
    Email,
    Social,
  } = data

  // Photo
  const imageFile = formData.get("file")
  let newPhotoName: string | null = null

  if (imageFile && !removePhoto) {
    const buffer = Buffer.from(await imageFile.arrayBuffer())
    const filename = `${Date.now()}_${imageFile.name.replaceAll(" ", "_")}`
    const imagePath = path.join(process.cwd(), ROUTES.profilePictures(filename))
    await writeFile(imagePath, buffer)
    newPhotoName = filename
  }

  const contact = await prisma.$transaction(async (tx) => {
    let contactQuery = {
      name,
      lastname,
      birthday,
      address,
      yearMet,
      notes,
    }

    if (removePhoto || imageFile) {
      contactQuery = {
        ...contactQuery,
        photo: newPhotoName,
      }
    }

    // Contact
    const contact = await tx.contact.upsert({
      where: {
        id: contactId || "",
      },
      update: contactQuery,
      create: contactQuery,
    })

    // Alias
    for (const aliasData of Alias) {
      const { id, alias } = aliasData

      const aliasQuery = {
        alias,
        contact: {
          connect: {
            id: contactId,
          },
        },
      }

      await tx.alias.upsert({
        where: {
          id: id || "",
        },
        update: aliasQuery,
        create: aliasQuery,
      })
    }

    // Number
    for (const numberData of Number) {
      const { id, number, type, label } = numberData

      const numberQuery = {
        number,
        type,
        label,
        contact: {
          connect: {
            id: contactId,
          },
        },
      }

      await tx.number.upsert({
        where: {
          id: id || "",
        },
        update: numberQuery,
        create: numberQuery,
      })
    }

    // Email
    for (const emailData of Email) {
      const { id, email, type, label } = emailData

      const emailQuery = {
        email,
        type,
        label,
        contact: {
          connect: {
            id: contactId,
          },
        },
      }

      await tx.email.upsert({
        where: {
          id: id || "",
        },
        update: emailQuery,
        create: emailQuery,
      })
    }

    // Social
    for (const socialData of Social) {
      const { id, username, platformId, label } = socialData

      const socialQuery = {
        username,
        label,
        platform: {
          connect: {
            id: platformId,
          },
        },
        contact: {
          connect: {
            id: contactId,
          },
        },
      }

      await tx.social.upsert({
        where: {
          id: id || "",
        },
        update: socialQuery,
        create: socialQuery,
      })
    }

    return contact
  })

  return contact
}

export const deleteContact = async (id) => {
  return await prisma.contact.update({
    where: {
      id,
    },
    data: {
      active: false,
    },
  })
}

export const getPlatforms = async () => {
  const platforms = await prisma.platform.findMany({
    select: {
      id: true,
      name: true,
      url: true,
      prefix: true,
    },
  })

  return platforms
}

export const getStats = async () => {
  const stats = await prisma.contact.groupBy({
    by: "yearMet",
    where: {
      active: true,
      NOT: [{ yearMet: null || 0 }],
    },
    _count: true,
    orderBy: {
      yearMet: "asc",
    },
  })

  return stats
}

export const updateFavorite = async (id: string, isFavorite: boolean) => {
  const contact = await prisma.contact.update({
    where: {
      id,
    },
    data: {
      favorite: isFavorite,
    },
  })

  return contact
}
