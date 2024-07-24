import { Metadata } from "next"

import { getContacts } from "@/actions/actions"
import { ContactForm } from "@/features/contacts/pages/ContactForm"
import { getContactById } from "@/utils/contacts"

interface EditContactPageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({
  params: { id },
}: EditContactPageProps): Promise<Metadata> {
  const contacts = await getContacts()
  const contact = getContactById(contacts, id)

  return {
    title: contact ? `${contact.name} ${contact.lastname}` : `Contactbook`,
  }
}

export default function EditContactPage({
  params: { id },
}: EditContactPageProps) {
  return <ContactForm id={id} />
}
