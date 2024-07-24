import { Metadata } from "next"

import { getContacts } from "@/actions/actions"
import { Contact } from "@/features/contacts/pages/Contact"
import { getContactById } from "@/utils/contacts"

interface ContactPageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({
  params: { id },
}: ContactPageProps): Promise<Metadata> {
  const contacts = await getContacts()
  const contact = getContactById(contacts, id)

  return {
    title: contact ? `${contact.name} ${contact.lastname}` : `Contactbook`,
  }
}

export default async function ContactPage({
  params: { id },
}: ContactPageProps) {
  return <Contact id={id} />
}
