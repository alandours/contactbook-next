import { ReactNode } from "react"

import { Contact } from "@/actions/actions"

export type BirthdayGroup = {
  birthdays: ReactNode | null
  quantity: number
}

export type ContactWithNextBirthday = Contact & {
  nextBirthday: Date
}

export type ContactsByBirthdayMonth = {
  [key: string]: ContactWithNextBirthday[]
}
