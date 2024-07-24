"use client"

import { ContactForm } from "@/features/contacts/pages/ContactForm"

interface EditContactPageProps {
  params: {
    id: string
  }
}

export default function EditContactPage({
  params: { id },
}: EditContactPageProps) {
  return <ContactForm id={id} />
}
