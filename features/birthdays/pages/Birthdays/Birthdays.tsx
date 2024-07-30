'use client'

import { useContext } from 'react'

import { PageHeader } from '@/components/PageHeader'
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
      {birthdays}
    </BirthdaysContainer>
  )
}
