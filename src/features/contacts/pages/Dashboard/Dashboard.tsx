'use client'

import { useState, useEffect, useContext } from 'react'

import { PageHeader } from '@/components/PageHeader'
import { ContactLink } from '@/components/ContactLink'
import { Section } from '@/components/Section'
import { ROUTES } from '@/constants/routes'
import {
  addNextBirthday,
  getRecentlyAddedContacts,
  getUpcomingBirthdays,
} from '@/features/birthdays/utils'
import { ContactsContext } from '@/features/contacts/context'
import { ButtonVariants, Contact } from '@/types'
import { ContactWithNextBirthday } from '@/types/birthday'
import { Link, Toast } from '@/ui'
import { Icons } from '@/ui/icons'

import { DashboardContainer, InlineLink } from './styles'

export const Dashboard = () => {
  const { contacts } = useContext(ContactsContext)

  const [upcomingBirthdays, setUpcomingBirthdays] = useState<
    ContactWithNextBirthday[] | null
  >(null)
  const [recentlyAdded, setRecentlyAdded] = useState<Contact[]>()

  useEffect(() => {
    const contactsWithNextBirthdays = addNextBirthday(contacts)
    const upcoming = getUpcomingBirthdays(contactsWithNextBirthdays)

    setUpcomingBirthdays(upcoming)

    const lastContacts = getRecentlyAddedContacts(contacts)
    setRecentlyAdded(lastContacts)
  }, [contacts])

  const subtitle =
    contacts && contacts.length ? (
      `${contacts.length} contacts`
    ) : (
      <p>
        Welcome to ContactBook! Get started by{' '}
        <InlineLink href={ROUTES.contacts.create} variant={ButtonVariants.LINK}>
          adding your first contact
        </InlineLink>
        .
      </p>
    )

  return (
    <DashboardContainer>
      <Toast />
      <PageHeader title="ContactBook" subtitle={subtitle} />
      <Section title="Upcoming birthdays" icon={Icons.cake}>
        <div>
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
            : 'No upcoming birthdays'}
        </div>
        {upcomingBirthdays && (
          <Link variant={ButtonVariants.LINK} href={ROUTES.birthdays} highlight>
            See all birthdays
          </Link>
        )}
      </Section>
      {!!recentlyAdded?.length && (
        <Section title="Recently added" icon={Icons.contacts}>
          <div>
            {recentlyAdded.map((contact) => (
              <ContactLink key={contact.id} contact={contact} showPhoto />
            ))}
          </div>
          {
            <Link
              variant={ButtonVariants.LINK}
              href={ROUTES.contacts.year}
              highlight
            >
              See contacts by year
            </Link>
          }
        </Section>
      )}
    </DashboardContainer>
  )
}
