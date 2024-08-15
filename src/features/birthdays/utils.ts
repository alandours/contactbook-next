import { Contact } from '@/types'
import {
  BirthdayGroup,
  ContactWithNextBirthday,
  ContactsByBirthdayMonth,
} from '@/types/birthday'

import {
  add,
  addYears,
  differenceInSeconds,
  differenceInYears,
  format,
  getMonth,
  getYear,
  setYear,
} from 'date-fns'

const getDaysToNextBirthday = (birthday: Date) =>
  Math.ceil(differenceInSeconds(birthday, new Date()) / 60 / 60 / 24)

const getNextBirthday = (birthday: Date) => {
  const today = new Date()
  const thisYearBirthday = setYear(birthday, today.getFullYear())

  return getDaysToNextBirthday(thisYearBirthday) >= 0
    ? thisYearBirthday
    : addYears(thisYearBirthday, 1)
}

export const isBirthdayFromToday = (birthday: Date, days = 0) => {
  const targetMonthDay = format(add(new Date(), { days }), 'MM-dd')
  const birthdayMonthDay = format(birthday, 'MM-dd')

  return birthdayMonthDay === targetMonthDay
}

export const getFormattedDaysToNextBirthday = (birthday: Date) => {
  const daysToNextBirthday = getDaysToNextBirthday(birthday)

  if (daysToNextBirthday === 0) {
    return 'Today'
  }

  if (daysToNextBirthday === 1) {
    return 'Tomorrow'
  }

  return `${daysToNextBirthday} days`
}

export const addNextBirthday = (
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
  const contactsWithNextBirthdays = addNextBirthday(contacts)

  if (!contactsWithNextBirthdays) {
    return { birthdays: null, quantity: 0 }
  }

  return {
    birthdays: groupByBirthdayMonth(contactsWithNextBirthdays),
    quantity: contactsWithNextBirthdays.length,
  }
}

export const calculateAge = (birthdayDate?: Date | null, yearOffset = 0) => {
  if (!birthdayDate) {
    return null
  }

  const age = differenceInYears(new Date(), new Date(birthdayDate))

  return age < 100 ? age + yearOffset : null
}

export const formatBirthday = (birthday: Date) => {
  if (calculateAge(birthday)) {
    return format(birthday, 'MMMM d, u')
  } else {
    return format(add(birthday, { days: 1 }), 'MMMM d')
  }
}

export const getListDate = (birthday: Date, showMonth: boolean) => {
  const listDateFormat = showMonth ? 'dd/MM' : 'dd'
  return format(birthday, listDateFormat)
}

export const getUpcomingBirthdays = (
  contactsWithBirthdays: ContactWithNextBirthday[] | null
) => {
  if (!contactsWithBirthdays) {
    return null
  }

  return contactsWithBirthdays.slice(0, 6)
}

export const getRecentlyAddedContacts = (contacts: Contact[]) => {
  const contactByCreationDate = [...contacts].sort(
    (contact1, contact2) =>
      new Date(contact2.createdAt).getTime() -
      new Date(contact1.createdAt).getTime()
  )
  return contactByCreationDate.slice(0, 6)
}
