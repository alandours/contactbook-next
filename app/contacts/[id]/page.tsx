"use client"

import { UIEvent, useContext, useEffect, useState } from "react"

import { Loader } from "@/ui"
import { NotFound } from "@/components/NotFound"
import { ContactMessage } from "@/components/ContactMessage"
import { FixedInfo } from "@/components/FixedInfo"
import { ContactsContext } from "@/context/contacts"
import { isMedia } from "@/ui/responsive"

import { MainInfo } from "./components/MainInfo"
import { SecondaryInfo } from "./components/SecondaryInfo"

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
  }, [id])

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
      {isMedia("tablet") && showFixedInfo && <FixedInfo />}
      <ContactMessage />
      <MainInfo />
      <SecondaryInfo />
    </ContactView>
  )
}
