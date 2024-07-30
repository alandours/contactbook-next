import React, { useContext } from 'react'

import { ButtonVariants } from '@/types'
import { Icon, Link } from '@/ui'
import { UIContext } from '@/ui/context'
import { Icons } from '@/ui/icons'

import { NavigationContainer, HeaderLinkText } from './styles'

export const Navigation = () => {
  const { theme } = useContext(UIContext)

  return (
    <NavigationContainer>
      <Link href="/contacts/create" variant={ButtonVariants.SECONDARY}>
        <Icon name={Icons.plus} color={theme.selected.contrast[1]} />
        <HeaderLinkText>Add contact</HeaderLinkText>
      </Link>
      <Link href="/settings" variant={ButtonVariants.SECONDARY}>
        <Icon name={Icons.cog} color={theme.selected.contrast[1]} />
        <HeaderLinkText>Settings</HeaderLinkText>
      </Link>
    </NavigationContainer>
  )
}
