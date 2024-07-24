"use client"

import { useState, useEffect, useContext } from "react"
import { Contact } from "@/types"

import { PageHeader } from "@/components/PageHeader"
import { ContactLink } from "@/components/ContactLink"
import { Section } from "@/components/Section"
import { ROUTES } from "@/constants/routes"
import {
  getContactsWithBirthdays,
  getRecentlyAddedContacts,
  getUpcomingBirthdays,
} from "@/features/birthdays/utils"
import { ContactsContext } from "@/features/contacts/context"
import { ContactWithNextBirthday } from "@/types/birthday"

import { Link, Loader, Toast } from "@/ui"
import { Icons } from "@/ui/icons"

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
      <Toast />
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
          <Link href={ROUTES.birthdays} highlight>
            See all birthdays
          </Link>
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
          <Link href={ROUTES.contacts.year} highlight>
            See contacts by year
          </Link>
        )}
      </Section>
    </DashboardContainer>
  )
}
