import { Metadata } from 'next'

import { getContact } from '@/actions/actions'
import { Contact } from '@/features/contacts/pages/Contact'

interface ContactPageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({
  params: { id },
}: ContactPageProps): Promise<Metadata> {
  const contact = await getContact(id)

  return {
    title: contact ? `${contact.name} ${contact.lastname}` : `Contactbook`,
  }
}

export default async function ContactPage({
  params: { id },
}: ContactPageProps) {
  const contact = await getContact(id)

  return <Contact contact={contact} />
}
