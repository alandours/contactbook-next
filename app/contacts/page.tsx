import { Dashboard } from "@/components/Dashboard"
import { Metadata } from "next"
import { getContacts } from "@/actions/actions"

export const metadata: Metadata = {
  title: "ContactBook",
}

export default async function Contacts() {
  const contacts = await getContacts()

  return <Dashboard contacts={contacts} />
}
