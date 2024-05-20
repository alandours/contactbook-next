"use client"

import { useState } from "react"

import { ContactForm } from "@/components/ContactForm"

export default function AddContact() {
  const [palette, setPalette] = useState(null)

  return <ContactForm palette={palette} setPalette={setPalette} />
}
