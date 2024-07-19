import { Contact } from '@/types'

export type BirthdayGroup = {
  birthdays: ContactsByBirthdayMonth | null
  quantity: number
}

export type ContactWithNextBirthday = Contact & {
  nextBirthday: Date
}

export type ContactsByBirthdayMonth = {
  [key: string]: ContactWithNextBirthday[]
}
