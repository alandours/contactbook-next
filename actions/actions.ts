"use server"

import prisma from "@/lib/prisma"

export type Contact = Awaited<ReturnType<typeof getContacts>>[0]

export const getContacts = async (search = "") => {
  const filter = {
    contains: search,
    mode: "insensitive",
  } as const

  const contacts = await prisma.contact.findMany({
    where: {
      active: true,
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
