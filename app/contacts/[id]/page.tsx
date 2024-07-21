"use client"

import { UIEvent, useContext, useEffect, useState } from "react"

import { NotFound } from "@/components/NotFound"
import {
  ContactHeader,
  ContactSecondaryData,
  StickyBar,
} from "@/features/contacts"
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

  const [showFixedInfo, setShowFixedInfo] = useState(false)

  useEffect(() => {
    selectContact(id)
  }, [id, selectContact])

  const handleScroll = (e: UIEvent<HTMLDivElement>) => {
    const { scrollTop } = e.target as HTMLDivElement
    setShowFixedInfo(scrollTop > 190)
  }

  if (loading) {
    return <Loader />
  }

  if (!selectedContact && !loading) {
    return <NotFound page="contact" />
  }

  return (
    <ContactView onScroll={isMedia("tablet") ? handleScroll : undefined}>
      {isMedia("tablet") && showFixedInfo && <StickyBar />}
      <Toast />
      <ContactHeader />
      <ContactSecondaryData />
    </ContactView>
  )
}
