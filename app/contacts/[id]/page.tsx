"use client"

import { UIEvent, useContext, useEffect, useState } from "react"
import { notFound } from "next/navigation"

import { ContactHeader } from "@/features/contacts/ContactHeader"
import { ContactSecondaryData } from "@/features/contacts/ContactSecondaryData"
import { StickyBar } from "@/features/contacts/StickyBar"
import { ContactsContext } from "@/features/contacts/context"
import { Loader, Toast } from "@/ui"
import { isMedia } from "@/ui/responsive"

import { ContactView } from "./styles"

interface ContactProps {
  params: {
    id: string
  }
}

export default function Contact({ params: { id } }: ContactProps) {
  const { selectedContact, loading, selectContact } =
    useContext(ContactsContext)

  const [showStickyBar, setShowStickyBar] = useState(false)

  useEffect(() => {
    const contact = selectContact(id)

    if (!contact) {
      notFound()
    }
  }, [id, selectContact])

  const handleScroll = (e: UIEvent<HTMLDivElement>) => {
    const { scrollTop } = e.target as HTMLDivElement
    setShowStickyBar(scrollTop > 190)
  }

  if (loading) {
    return <Loader />
  }

  return (
    <ContactView onScroll={isMedia("tablet") ? handleScroll : undefined}>
      {isMedia("tablet") && showStickyBar && <StickyBar />}
      <Toast />
      <ContactHeader />
      <ContactSecondaryData />
    </ContactView>
  )
}
