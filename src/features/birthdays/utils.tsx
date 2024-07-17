import { Contact } from '@/types'
import { Section } from '@/components/Section'
import { ContactLink } from '@/components/ContactLink'
import {
  BirthdayGroup,
  ContactWithNextBirthday,
  ContactsByBirthdayMonth,
} from '@/types/birthday'

export const getNextBirthday = (birthday: Date) => {
  const todayDate = new Date()
  const birthdayDate = new Date(birthday.getTime())

  const currentYear = todayDate.getFullYear()
  birthdayDate.setFullYear(currentYear)

  const isBirthdayInCurrentYear =
    birthdayDate.getTime() - todayDate.getTime() > 0

  const isBirthdayToday = birthdayDate.getDate() === todayDate.getDate()

  if (!isBirthdayInCurrentYear && !isBirthdayToday) {
    birthdayDate.setFullYear(currentYear + 1)
  }

  return birthdayDate
}

export const getContactsWithBirthdays = (
  contacts: Contact[]
): ContactWithNextBirthday[] | null => {
  const withBirthdays = contacts.filter((contact) => contact.birthday)

  if (!withBirthdays.length) {
    return null
  }

  const withNextBirthday = withBirthdays.map((contact) => ({
    ...contact,
    nextBirthday: getNextBirthday(contact.birthday as Date),
  }))

  const sortedByBirthday = withNextBirthday.sort(
    (contact1, contact2) =>
      contact1.nextBirthday.getTime() - contact2.nextBirthday.getTime()
  )

  return sortedByBirthday
}

export const groupByBirthdayMonth = (
  contactsWithBirthdays: ContactWithNextBirthday[]
): ContactsByBirthdayMonth => {
  if (!contactsWithBirthdays) {
    return {}
  }

  return contactsWithBirthdays.reduce((acc, contact) => {
    const contactsByBirthdayMonth: ContactsByBirthdayMonth = acc
    const { nextBirthday } = contact || {}

    const monthYear = `${nextBirthday.toLocaleString('en', {
      month: 'long',
    })} ${nextBirthday.getFullYear()}`

    contactsByBirthdayMonth[monthYear] = contactsByBirthdayMonth[monthYear]
      ? [...contactsByBirthdayMonth[monthYear], contact]
      : [contact]

    return contactsByBirthdayMonth
  }, {})
}

export const calculateAge = (birthdayDate?: Date | null) => {
  if (!birthdayDate) {
    return null
  }

  const today = new Date()
  const birthday = new Date(birthdayDate)

  const month = today.getMonth() - birthday.getMonth()
  let age = today.getFullYear() - birthday.getFullYear()

  if (month < 0 || (month === 0 && today.getDate() <= birthday.getDate()))
    age -= 1

  return age < 100 ? age : null
}

export const calculateNextBirthdayAge = (birthday: Date) => {
  const age = calculateAge(birthday)
  return age ? age + 1 : null
}

export const getBirthdayText = (birthday: Date) => {
  const options: Intl.DateTimeFormatOptions = { month: 'long' }
  const locale = 'en'

  if (calculateAge(birthday))
    return `${birthday.toLocaleDateString(
      locale,
      options
    )} ${birthday.getUTCDate()}, ${birthday.getUTCFullYear()}`

  return `${birthday.toLocaleDateString(
    locale,
    options
  )} ${birthday.getUTCDate()}`
}

export const isBirthdayFromToday = (birthday: Date, days = 0) => {
  const todayDate = new Date()
  todayDate.setDate(todayDate.getDate() + days)

  return (
    birthday.getDate() === todayDate.getDate() &&
    birthday.getMonth() === todayDate.getMonth()
  )
}

export const getListDate = (birthday: Date, showMonth: boolean) => {
  const day = `${birthday.getUTCDate()}`
  const month = birthday.getUTCMonth() + 1

  if (showMonth) {
    return `${day}/${month}`
  }

  return day
}

export const getNamedDate = (birthday: Date) => {
  if (isBirthdayFromToday(birthday)) {
    return 'Today'
  }

  if (isBirthdayFromToday(birthday, 1)) {
    return 'Tomorrow'
  }

  const daysUntilBirthday = Math.round(
    (birthday.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
  )

  return daysUntilBirthday ? `${daysUntilBirthday} days` : null
}

export const getBirthdayGroups = (contacts: Contact[]): BirthdayGroup => {
  const contactsWithBirthdays = getContactsWithBirthdays(contacts)

  if (!contactsWithBirthdays) {
    return { birthdays: null, quantity: 0 }
  }

  const contactsByBirthdayMonth = groupByBirthdayMonth(contactsWithBirthdays)

  const birthdayGroups = Object.entries(contactsByBirthdayMonth).map(
    ([month, contacts]) => (
      <Section title={month} key={month}>
        {contacts.map((contact) => (
          <ContactLink key={contact.id} contact={contact} showAge showPhoto />
        ))}
      </Section>
    )
  )

  return { birthdays: birthdayGroups, quantity: contactsWithBirthdays.length }
}

export const getUpcomingBirthdays = (
  contactsWithBirthdays: ContactWithNextBirthday[] | null
) => (contactsWithBirthdays ? contactsWithBirthdays.slice(0, 4) : null)

export const getRecentlyAddedContacts = (contacts: Contact[]) => {
  const contactByCreationDate = [...contacts].sort(
    (contact1, contact2) =>
      new Date(contact2.createdAt).getTime() -
      new Date(contact1.createdAt).getTime()
  )
  return contactByCreationDate.slice(0, 4)
}
