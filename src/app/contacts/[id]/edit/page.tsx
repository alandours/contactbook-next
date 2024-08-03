import { Metadata } from 'next'

import { getContact } from '@/actions/actions'
import { ContactForm } from '@/features/contacts/pages/ContactForm'

interface EditContactPageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({
  params: { id },
}: EditContactPageProps): Promise<Metadata> {
  const contact = await getContact(id)

  return {
    title: contact
      ? `${contact.name} ${contact.lastname || ''}`
      : `Contactbook`,
  }
}

export default async function EditContactPage({
  params: { id },
}: EditContactPageProps) {
  const contact = await getContact(id)

  return <ContactForm contact={contact} />
}
