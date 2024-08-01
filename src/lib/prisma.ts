import { PrismaClient } from '@prisma/client'

const parseDate = (date: Date) =>
  new Date(date.valueOf() + date.getTimezoneOffset() * 60 * 1000)

const prismaClientSingleton = () => {
  return new PrismaClient().$extends({
    query: {
      contact: {
        async findFirst({ args, query }) {
          const contact = await query(args)

          const newContact = { ...contact }

          if (newContact?.birthday) {
            newContact.birthday = parseDate(newContact.birthday)
          }

          return newContact
        },
        async findMany({ args, query }) {
          const contacts = await query(args)

          return contacts.map((contact) => {
            const newContact = { ...contact }

            if (newContact?.birthday) {
              newContact.birthday = parseDate(newContact.birthday)
            }

            return newContact
          })
        },
      },
    },
  })
}

declare global {
  var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>
}

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma
