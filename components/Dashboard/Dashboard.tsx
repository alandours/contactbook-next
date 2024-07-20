"use client"

import React, { useState, useEffect, useContext } from "react"
import { Contact } from "@/types"

import { PageHeader } from "@/components/PageHeader"
import { ContactMessage } from "@/components/ContactMessage"
import { ContactLink } from "@/components/ContactLink"
import { ContactBookLink } from "@/components/ContactBookLink"
import { Section } from "@/components/Section"
import { Loader } from "@/components/Loader"
import { ContactsContext } from "@/context/contacts"
import { ContactWithNextBirthday } from "@/types/birthday"
import {
  getContactsWithBirthdays,
  getRecentlyAddedContacts,
  getUpcomingBirthdays,
} from "@/utils/date"
import { Icons } from "@/utils/icons"

import { DashboardContainer } from "./styles"

export const Dashboard = () => {
  const { contacts } = useContext(ContactsContext)

  const [upcomingBirthdays, setUpcomingBirthdays] =
    useState<ContactWithNextBirthday[]>()
  const [lastAdded, setLastAdded] = useState<Contact[]>()

  useEffect(() => {
    const contactsWithBirthdays = getContactsWithBirthdays(contacts)
    const upcoming = getUpcomingBirthdays(contactsWithBirthdays)

    if (upcoming) {
      setUpcomingBirthdays(upcoming)
      const lastContacts = getRecentlyAddedContacts(contacts)
      setLastAdded(lastContacts)
    }
  }, [contacts])

  const subtitle =
    contacts && contacts.length ? `${contacts.length} contacts` : ""

  return (
    <DashboardContainer>
      <ContactMessage />
      <PageHeader title="ContactBook" subtitle={subtitle} />
      <Section title="Upcoming birthdays" icon={Icons.cake}>
        {upcomingBirthdays === undefined && <Loader />}

        {upcomingBirthdays?.length
          ? upcomingBirthdays.map((contact) => (
              <ContactLink
                key={contact.id}
                contact={contact}
                showPhoto
                showAge
                showMonth
              />
            ))
          : "There are no upcoming birthdays"}

        {upcomingBirthdays && (
          <ContactBookLink url="/birthdays" highlight>
            See all birthdays
          </ContactBookLink>
        )}
      </Section>
      <Section title="Last contacts" icon={Icons.contacts}>
        {lastAdded === undefined && <Loader />}

        {lastAdded?.length
          ? lastAdded.map((contact) => (
              <ContactLink key={contact.id} contact={contact} showPhoto />
            ))
          : "There are no contacts"}

        {lastAdded && !!lastAdded.length && (
          <ContactBookLink url="/contacts/year" highlight>
            See contacts by year
          </ContactBookLink>
        )}
      </Section>
    </DashboardContainer>
  )
}
