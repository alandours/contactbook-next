"use server"

import prisma from "@/lib/prisma"
import { Filters } from "@/types"
import { redirect } from "next/navigation"

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
  })

  return contacts
}

export const upsertContact = async (data) => {
  const {
    id: contactId,
    name,
    lastname,
    birthday,
    address,
    yearMet,
    notes,
    Alias,
    Number,
    Email,
  } = data

  const userId = await prisma.$transaction(async (tx) => {
    const userQuery = {
      name,
      lastname,
      birthday,
      address,
      yearMet,
      notes,
      // photo: data.photo
    }

    // Contact
    const user = await tx.contact.upsert({
      where: {
        id: contactId || "",
      },
      update: userQuery,
      create: userQuery,
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
    for (const emailData of Number) {
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

    return user.id
  })

  redirect(`/contacts/${userId}`)
}

export const deleteContact = async (id) => {
  const user = await prisma.contact.update({
    where: {
      id,
    },
    data: {
      active: false,
    },
  })

  redirect(`/contacts`)
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
  const user = await prisma.contact.update({
    where: {
      id,
    },
    data: {
      favorite: isFavorite,
    },
  })

  return user
}
