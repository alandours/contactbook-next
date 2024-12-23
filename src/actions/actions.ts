'use server'

import { revalidatePath } from 'next/cache'

import { MESSAGES } from '@/constants/messages'
import { schema } from '@/features/contacts/pages/ContactForm/schema'
import prisma from '@/lib/prisma'
import { Prisma } from '@prisma/client'
import { ContactFormData, Filters, Status } from '@/types'
import { tagsToOptions } from '@/utils/contacts'

import { createQuery, createRelatedFieldQuery, writeImage } from './utils'

const ASC = Prisma.SortOrder.asc

const CONTACT_SELECT = {
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
      platformId: true,
    },
    orderBy: [{ platform: { name: ASC } }],
  },
  numbers: {
    select: {
      id: true,
      number: true,
      type: true,
      label: true,
    },
    orderBy: [{ type: ASC }, { label: ASC }],
  },
  emails: {
    select: {
      id: true,
      email: true,
      type: true,
      label: true,
    },
    orderBy: [{ type: ASC }, { label: ASC }],
  },
  aliases: {
    select: {
      id: true,
      alias: true,
    },
    orderBy: [{ alias: ASC }],
  },
  tags: {
    select: {
      id: true,
      name: true,
    },
    orderBy: [{ name: ASC }],
  },
  relatesTo: {
    select: {
      id: true,
      label: true,
      contact: {
        select: {
          id: true,
          name: true,
          lastname: true,
        },
      },
    },
    orderBy: [
      { label: ASC },
      { contact: { name: ASC } },
      { contact: { lastname: ASC } },
    ],
  },
}

export const getContacts = async (filters: Filters = {}) => {
  const searchFilter = {
    contains: filters.search || '',
    mode: 'insensitive',
  } as const

  return await prisma.contact.findMany({
    select: CONTACT_SELECT,
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
        {
          tags: {
            some: {
              name: searchFilter,
            },
          },
        },
      ],
    },
    orderBy: [{ name: 'asc' }, { lastname: 'asc' }],
  })
}

export const getContact = async (id: string) =>
  await prisma.contact.findFirst({
    select: CONTACT_SELECT,
    where: {
      id,
      active: true,
    },
  })

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
    tags,
    relatesTo,
  } = data

  try {
    const imageFile = formData.get('file') as File | null

    const parsed = schema.safeParse({
      ...data,
      file: imageFile,
      tags: tagsToOptions(tags),
    })

    if (!parsed.success) {
      console.warn(MESSAGES.CONTACT_VALIDATION, parsed)

      return {
        status: Status.ERROR,
        message: MESSAGES.CONTACT_VALIDATION,
        contact: null,
      }
    }

    const contact = await prisma.$transaction(async (tx) => {
      const query = {
        name,
        lastname,
        birthday,
        address,
        yearMet,
        notes,
      }

      const contact = await tx.contact.upsert(createQuery(query, contactId))

      // Tag
      await tx.contact.update({
        data: {
          tags: {
            connectOrCreate: tags.map((tag) => ({
              where: { id: tag.id },
              create: tag,
            })),
            set: tags.map((tag) => ({ id: tag.id })),
          },
        },
        where: {
          id: contact.id,
        },
      })

      // Photo
      if (contact && (imageFile || removePhoto)) {
        const photo =
          imageFile && !removePhoto
            ? await writeImage(imageFile, contact.id)
            : null

        await tx.contact.update({
          data: { photo },
          where: {
            id: contact.id,
          },
        })
      }

      // Relation
      await tx.contactToContact.deleteMany({
        where: {
          fromContactId: contact.id,
          NOT: relatesTo.map(({ id }) => ({ id: id || 0 })),
        },
      })

      for (const relation of relatesTo) {
        if (!relation.contact.id) {
          continue
        }

        await tx.contactToContact.upsert({
          where: {
            id: Number(relation.id || 0),
          },
          update: {
            fromContactId: contact.id,
            contactId: relation.contact.id,
            label: relation.label,
          },
          create: {
            fromContactId: contact.id,
            contactId: relation.contact.id,
            label: relation.label,
          },
        })

        // Bidirectional update
        // await tx.contactToContact.upsert({
        //   where: {
        //     fromContactId_contactId: {
        //       fromContactId: relation.contact.id,
        //       contactId: contact.id,
        //     },
        //   },
        //   update: {},
        //   create: {
        //     fromContactId: relation.contact.id,
        //     contactId: contact.id,
        //   },
        // })
      }

      // Alias
      await tx.alias.deleteMany({
        where: {
          contactId: contact.id,
          NOT: aliases.map(({ id }) => ({ id })),
        },
      })

      for (const aliasData of aliases) {
        const query = createRelatedFieldQuery(aliasData, contact.id)
        await tx.alias.upsert(query)
      }

      // Number
      await tx.number.deleteMany({
        where: {
          contactId: contact.id,
          NOT: numbers.map(({ id }) => ({ id })),
        },
      })

      for (const numberData of numbers) {
        const query = createRelatedFieldQuery(numberData, contact.id)
        await tx.number.upsert(query)
      }

      // Email
      await tx.email.deleteMany({
        where: {
          contactId: contact.id,
          NOT: emails.map(({ id }) => ({ id })),
        },
      })

      for (const emailData of emails) {
        const query = createRelatedFieldQuery(emailData, contact.id)
        await tx.email.upsert(query)
      }

      // Social
      await tx.social.deleteMany({
        where: {
          contactId: contact.id,
          NOT: socials.map(({ id }) => ({ id })),
        },
      })

      for (const socialData of socials) {
        const query = createRelatedFieldQuery(socialData, contact.id)
        await tx.social.upsert(query)
      }

      return contact
    })

    revalidatePath('/', 'layout')

    const message = contactId
      ? MESSAGES.CONTACT_UPDATE[Status.SUCCESS](contact)
      : MESSAGES.CONTACT_CREATE[Status.SUCCESS](contact)

    return { status: Status.SUCCESS, message, contact }
  } catch (error) {
    const message = contactId
      ? MESSAGES.CONTACT_UPDATE[Status.ERROR](data)
      : MESSAGES.CONTACT_CREATE[Status.ERROR]

    console.warn('Upsert contact error', error)

    return { status: Status.ERROR, message, contact: null }
  }
}

export const deleteContact = async (id: string) => {
  try {
    const contact = await prisma.contact.update({
      where: {
        id,
      },
      data: {
        active: false,
      },
    })

    revalidatePath('/', 'layout')

    return {
      status: Status.SUCCESS,
      message: MESSAGES.CONTACT_DELETE[Status.SUCCESS](contact),
    }
  } catch {
    return {
      status: Status.ERROR,
      message: MESSAGES.CONTACT_DELETE[Status.ERROR],
    }
  }
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

  revalidatePath('/', 'layout')

  return user
}

export const getStats = async () =>
  await prisma.contact.groupBy({
    by: 'yearMet',
    where: {
      active: true,
      NOT: [{ yearMet: null || 0 }],
    },
    _count: true,
    orderBy: {
      yearMet: 'asc',
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
    orderBy: { name: 'asc' },
  })

export const getTags = async () =>
  await prisma.tag.findMany({
    select: {
      id: true,
      name: true,
    },
    orderBy: { name: 'asc' },
  })
