import { Contact } from "@/actions/actions"
import { Section } from "@/components/Section"
import { ContactLink } from "@/components/ContactLink"
import {
  BirthdayGroup,
  ContactWithNextBirthday,
  ContactsByBirthdayMonth,
} from "@/types/birthday"

const getNextBirthday = (birthday: Date) => {
  const todayDate = new Date()
  const birthdayDate = new Date(formatDate(birthday).getTime())

  const currentYear = todayDate.getFullYear()
  birthdayDate.setFullYear(currentYear)

  const isBirthdayInCurrentYear =
    birthdayDate.getTime() - todayDate.getTime() > 0

  const isBirthdayToday = birthdayDate.getTime() === todayDate.getTime()

  if (!isBirthdayInCurrentYear && !isBirthdayToday) {
    birthdayDate.setFullYear(currentYear + 1)
  }

  return birthdayDate
}

export const getContactsWithBirthdays = (contacts: Contact[]) => {
  const withBirthdays = contacts.filter((contact) => contact.birthday)

  if (!withBirthdays.length) return null

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

    const monthYear = `${nextBirthday.toLocaleString("en", {
      month: "long",
    })} ${nextBirthday.getFullYear()}`

    contactsByBirthdayMonth[monthYear] = contactsByBirthdayMonth[monthYear]
      ? [...contactsByBirthdayMonth[monthYear], contact]
      : [contact]

    return contactsByBirthdayMonth
  }, {})
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
          <ContactLink contact={contact} key={contact.id} showAge showPhoto />
        ))}
      </Section>
    )
  )

  return { birthdays: birthdayGroups, quantity: contactsWithBirthdays.length }
}
