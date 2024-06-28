import { Metadata } from "next"

import { Birthdays } from "./components"

export const metadata: Metadata = {
  title: "ContactBook - Birthdays",
}

export default async function BirthdaysPage() {
  return <Birthdays />
}
