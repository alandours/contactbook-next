"use client"

import { ContactForm } from "@/features/contacts"

interface EditContactProps {
  params: {
    id: string
  }
}

export default function EditContact({ params: { id } }: EditContactProps) {
  return <ContactForm id={id} />
}
