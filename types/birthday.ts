import { ReactNode } from "react"

import { Contact } from "@/types"

export type BirthdayGroup = {
  birthdays: ReactNode | null
  quantity: number
}

export type ContactWithNextBirthday = Contact & {
  nextBirthday?: Date
}

export type ContactsByBirthdayMonth = {
  [key: string]: ContactWithNextBirthday[]
}
