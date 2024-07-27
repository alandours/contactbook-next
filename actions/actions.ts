"use server"

import prisma from "@/lib/prisma"
import { ContactFormData, Filters } from "@/types"

import { createQuery, createRelatedFieldQuery, writeImage } from "./utils"

export const getContacts = async (filters: Filters = {}) => {
  const searchFilter = {
    contains: filters.search || "",
    mode: "insensitive",
  } as const

  return await prisma.contact.findMany({
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
      socials: {
        select: {
          id: true,
          username: true,
          label: true,
          platform: true,
        },
      },
      numbers: {
        select: {
          id: true,
          number: true,
          type: true,
          label: true,
        },
      },
      emails: {
        select: {
          id: true,
          email: true,
          type: true,
          label: true,
        },
      },
      aliases: {
        select: {
          id: true,
          alias: true,
        },
      },
    },
    where: {
      active: true,
      yearMet: filters.year,
      favorite: filters.favorite,
      OR: [
        {
          name: searchFilter,
        },
        {
          lastname: searchFilter,
        },
        {
          address: searchFilter,
        },
        {
          notes: searchFilter,
        },
        {
          aliases: {
            some: {
              alias: searchFilter,
            },
          },
        },
        {
          numbers: {
            some: {
              number: searchFilter,
            },
          },
        },
        {
          emails: {
            some: {
              email: searchFilter,
            },
          },
        },

        {
          socials: {
            some: {
              username: searchFilter,
            },
          },
        },
        {
          socials: {
            some: {
              platform: {
                name: searchFilter,
              },
            },
          },
        },
      ],
    },
    orderBy: [{ name: "asc" }, { lastname: "asc" }],
  })
}

export const upsertContact = async (
  data: ContactFormData,
  formData: FormData
) => {
  const {
    id: contactId,
    name,
    lastname,
    birthday,
    address,
    yearMet,
    notes,
    removePhoto,
    aliases,
    numbers,
    emails,
    socials,
  } = data

  const imageFile = formData.get("file") as File | null
  const photo = imageFile && !removePhoto ? await writeImage(imageFile) : null

  return await prisma.$transaction(async (tx) => {
    const query = {
      name,
      lastname,
      birthday,
      address,
      yearMet,
      notes,
      ...(imageFile || removePhoto ? { photo } : {}),
    }

    const contact = await tx.contact.upsert(createQuery(contactId, query))

    for (const aliasData of aliases) {
      const query = createRelatedFieldQuery(aliasData, contactId)
      await tx.alias.upsert(query)
    }

    for (const numberData of numbers) {
      const query = createRelatedFieldQuery(numberData, contactId)
      await tx.number.upsert(query)
    }

    for (const emailData of emails) {
      const query = createRelatedFieldQuery(emailData, contactId)
      await tx.email.upsert(query)
    }

    for (const socialData of socials) {
      const query = createRelatedFieldQuery(socialData, contactId)
      await tx.social.upsert(query)
    }

    return contact
  })
}

export const deleteContact = async (id: string) =>
  await prisma.contact.update({
    where: {
      id,
    },
    data: {
      active: false,
    },
  })

export const updateFavorite = async (id: string, isFavorite: boolean) =>
  await prisma.contact.update({
    where: {
      id,
    },
    data: {
      favorite: isFavorite,
    },
  })

export const getStats = async () =>
  await prisma.contact.groupBy({
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

export const getPlatforms = async () =>
  await prisma.platform.findMany({
    select: {
      id: true,
      name: true,
      url: true,
      prefix: true,
    },
  })
