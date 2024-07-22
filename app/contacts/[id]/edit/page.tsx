"use client"

import { ContactForm } from "@/features/contacts/ContactForm"

interface EditContactProps {
  params: {
    id: string
  }
}

export default function EditContact({ params: { id } }: EditContactProps) {
  return <ContactForm id={id} />
}
