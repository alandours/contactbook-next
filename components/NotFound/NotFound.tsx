'use client'

import { useContext } from 'react'

import { ROUTES } from '@/constants/routes'
import { ContactsContext } from '@/features/contacts/context'
import { UIContext } from '@/ui/context'
import { Icons } from '@/ui/icons'
import { getRandomContact } from '@/utils/contacts'
import { NotFoundType } from '@/types'

import {
  NotFoundContainer,
  NotFoundTitle,
  NotFoundIcon,
  NotFoundSubtitle,
  NotFoundLink,
} from './styles'

interface NotFoundProps {
  page?: NotFoundType
}

export const NotFound = ({ page = NotFoundType.MAIN }: NotFoundProps) => {
  const { theme } = useContext(UIContext)
  const { contacts } = useContext(ContactsContext)

  let title = "This page doesn't exist"

  let subtitle = (
    <>
      Go back <NotFoundLink href={ROUTES.contacts.main}>home</NotFoundLink>
    </>
  )

  if (page === NotFoundType.CONTACT && contacts.length) {
    const { id, name } = getRandomContact(contacts)

    title = "This is not the contact you're looking for"

    subtitle = (
      <>
        Try a different one, like{' '}
        <NotFoundLink href={ROUTES.contacts.profile(id)} highlight>
          {name}
        </NotFoundLink>
      </>
    )
  }

  return (
    <NotFoundContainer>
      <NotFoundTitle>
        <NotFoundIcon
          name={Icons.heartBroken}
          size="1.25rem"
          color={theme.selected.danger.light}
        />
        {title}
      </NotFoundTitle>
      <NotFoundSubtitle>{subtitle}</NotFoundSubtitle>
    </NotFoundContainer>
  )
}
