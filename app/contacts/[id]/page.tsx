import { Contact } from "@/features/contacts/pages/Contact"

interface ContactPageProps {
  params: {
    id: string
  }
}

export default function ContactPage({ params: { id } }: ContactPageProps) {
  return <Contact id={id} />
}
