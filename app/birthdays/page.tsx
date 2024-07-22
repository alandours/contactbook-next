import { Metadata } from "next"

import { Birthdays } from "@/features/birthdays/Birthdays"

export const metadata: Metadata = {
  title: "ContactBook | Birthdays",
}

export default async function BirthdaysPage() {
  return <Birthdays />
}
