import { Metadata } from "next"

import { getContacts } from "@/actions/actions"

import { Birthdays } from "./components"

export const metadata: Metadata = {
  title: "ContactBook - Birthdays",
}

export default async function BirthdaysPage() {
  const contacts = await getContacts()
  return <Birthdays contacts={contacts} />
}
