import { useContext } from 'react'

import { ProfilePicture } from '@/components/ProfilePicture'
import { ContactsContext } from '@/features/contacts/context'

import { StickyBarContainer, Name } from './styles'

export const StickyBar = () => {
  const { selectedContact } = useContext(ContactsContext)
  const { name, lastname } = selectedContact || {}

  return (
    name && (
      <StickyBarContainer>
        <ProfilePicture contact={selectedContact} thumbnail />
        <Name>{`${name} ${lastname || ''}` || 'New contact'}</Name>
      </StickyBarContainer>
    )
  )
}
