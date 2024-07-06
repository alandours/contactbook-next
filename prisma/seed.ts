import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.platform.createMany({
    data: [
      { name: 'Instragram', url: 'instagram.com' },
      { name: 'X', url: 'x.com' },
      { name: 'Linkedin', url: 'linkedin.com/in' },
    ],
  })

  await prisma.contact.create({
    data: {
      name: 'Michael',
      lastname: 'Scott',
      address: 'Boulder, Colorado',
      yearMet: 2005,
      notes: "That's what she said",
      aliases: {
        create: [
          {
            alias: 'Prison Mike',
          },
          {
            alias: 'Michael Scarn',
          },
        ],
      },
      emails: {
        create: {
          email: 'michael@dundermifflin.com',
        },
      },
    },
  })

  await prisma.contact.create({
    data: {
      name: 'Jim',
      lastname: 'Halpert',
      address: 'Austin, Texas',
      yearMet: 2005,
      notes: '👀',
      aliases: {
        create: {
          alias: 'Big Tuna',
        },
      },
      emails: {
        create: {
          email: 'jim@athleap.com',
        },
      },
    },
  })

  await prisma.contact.create({
    data: {
      name: 'Pam',
      lastname: 'Beesley',
      address: 'Austin, Texas',
      yearMet: 2005,
      notes: 'Dunder Mifflin, this is Pam',
      emails: {
        create: {
          email: 'pam@dundermifflin.com',
        },
      },
    },
  })

  await prisma.contact.create({
    data: {
      name: 'Dwight',
      lastname: 'Schrute',
      address: 'Scranton, Pennsylvania',
      yearMet: 2005,
      notes: 'Assistant (to the) Regional Manager',
      emails: {
        create: {
          email: 'dwight@dundermifflin.com',
        },
      },
    },
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
