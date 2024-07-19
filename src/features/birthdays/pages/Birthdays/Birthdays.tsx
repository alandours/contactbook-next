'use client'

import { useContext } from 'react'

import { ContactLink } from '@/components/ContactLink'
import { PageHeader } from '@/components/PageHeader'
import { Section } from '@/components/Section'
import { getBirthdayGroups } from '@/features/birthdays/utils'
import { ContactsContext } from '@/features/contacts/context'
import { Loader } from '@/ui'

import { BirthdaysContainer } from './styles'

export const Birthdays = () => {
  const { contacts } = useContext(ContactsContext)

  const { birthdays, quantity } = getBirthdayGroups(contacts)
  const subtitle = quantity ? `${quantity} birthdays` : ''

  return (
    <BirthdaysContainer>
      <PageHeader title="Birthdays" subtitle={subtitle} />
      {!contacts.length && <Loader />}
      {!!birthdays &&
        Object.entries(birthdays).map(([month, contacts]) => (
          <Section title={month} key={month}>
            {contacts.map((contact) => (
              <ContactLink
                key={contact.id}
                contact={contact}
                showAge
                showPhoto
              />
            ))}
          </Section>
        ))}
    </BirthdaysContainer>
  )
}
