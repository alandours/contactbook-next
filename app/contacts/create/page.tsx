import { Metadata } from "next"

import { ContactForm } from "@/features/contacts/ContactForm"

export const metadata: Metadata = {
  title: "ContactBook | Add contact",
}

export default function CreateContact() {
  return <ContactForm />
}
