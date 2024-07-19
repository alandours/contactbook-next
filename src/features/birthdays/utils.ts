import { Contact } from '@/types'
import {
  BirthdayGroup,
  ContactWithNextBirthday,
  ContactsByBirthdayMonth,
} from '@/types/birthday'

import {
  add,
  addYears,
  differenceInDays,
  differenceInYears,
  format,
  setYear,
} from 'date-fns'

const getNextBirthday = (birthday: Date) => {
  const today = new Date()
  const thisYearBirthday = setYear(birthday, today.getFullYear())

  return thisYearBirthday < today
    ? addYears(thisYearBirthday, 1)
    : thisYearBirthday
}

const getDaysToNextBirthday = (birthday: Date) =>
  differenceInDays(getNextBirthday(birthday), new Date())

export const isBirthdayFromToday = (birthday: Date, days = 0) => {
  const targetMonthDay = format(add(new Date(), { days }), 'MM-dd')
  const birthdayMonthDay = format(birthday, 'MM-dd')

  return birthdayMonthDay === targetMonthDay
}

export const getFormattedDaysToNextBirthday = (birthday: Date) => {
  if (isBirthdayFromToday(birthday)) {
    return 'Today'
  }

  if (isBirthdayFromToday(birthday, 1)) {
    return 'Tomorrow'
  }

  const daysToNextBirthday = getDaysToNextBirthday(birthday)

  return `${daysToNextBirthday} days`
}

export const addSortNextBirthday = (
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

    const monthYear = format(nextBirthday, 'MMMM u')

    contactsByBirthdayMonth[monthYear] = contactsByBirthdayMonth[monthYear]
      ? [...contactsByBirthdayMonth[monthYear], contact]
      : [contact]

    return contactsByBirthdayMonth
  }, {})
}

export const getBirthdayGroups = (contacts: Contact[]): BirthdayGroup => {
  const contactsWithNextBirthdays = addSortNextBirthday(contacts)

  if (!contactsWithNextBirthdays) {
    return { birthdays: null, quantity: 0 }
  }

  return {
    birthdays: groupByBirthdayMonth(contactsWithNextBirthdays),
    quantity: contactsWithNextBirthdays.length,
  }
}

export const calculateAge = (birthdayDate?: Date | null) => {
  if (!birthdayDate) {
    return null
  }

  const age = differenceInYears(new Date(), new Date(birthdayDate))

  return age < 100 ? age : null
}

export const calculateNextBirthdayAge = (birthday: Date) => {
  const age = calculateAge(birthday)
  return age ? age + 1 : null
}

export const formatBirthday = (birthday: Date) =>
  calculateAge(birthday)
    ? format(birthday, 'MMMM d, u')
    : format(birthday, 'MMMM d')

export const getListDate = (birthday: Date, showMonth: boolean) => {
  const listDateFormat = showMonth ? 'dd/MM' : 'dd'
  return format(birthday, listDateFormat)
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
