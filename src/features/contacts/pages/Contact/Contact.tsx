'use client'

import { UIEvent, useContext, useEffect, useState } from 'react'
import { notFound } from 'next/navigation'

import { ContactHeader } from '@/features/contacts/ContactHeader'
import { ContactSecondaryData } from '@/features/contacts/ContactSecondaryData'
import { StickyBar } from '@/features/contacts/StickyBar'
import { ContactsContext } from '@/features/contacts/context'
import { Contact as ContactType } from '@/types'
import { Loader } from '@/ui'
import { isMedia } from '@/ui/responsive'

import { ContactView } from './styles'

interface ContactProps {
  contact: ContactType | null
}

export const Contact = ({ contact }: ContactProps) => {
  const { loading, selectContact } = useContext(ContactsContext)

  const [showStickyBar, setShowStickyBar] = useState(false)

  useEffect(() => {
    if (!contact) {
      return notFound()
    }

    selectContact(contact)
  }, [contact, selectContact])

  const handleScroll = (e: UIEvent<HTMLDivElement>) => {
    const { scrollTop } = e.target as HTMLDivElement
    setShowStickyBar(scrollTop > 190)
  }

  if (loading && !contact) {
    return <Loader />
  }

  return (
    <ContactView onScroll={isMedia('tablet') ? handleScroll : undefined}>
      {isMedia('tablet') && showStickyBar && <StickyBar />}
      <ContactHeader />
      <ContactSecondaryData />
    </ContactView>
  )
}
