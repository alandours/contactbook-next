"use client"

import { ContactForm } from "@/features/contacts/pages/ContactForm"

interface EditContactProps {
  params: {
    id: string
  }
}

export default function EditContact({ params: { id } }: EditContactProps) {
  return <ContactForm id={id} />
}
