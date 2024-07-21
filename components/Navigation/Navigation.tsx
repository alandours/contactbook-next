import React from "react"

import { ButtonVariants } from "@/types"
import { Icon, Link } from "@/ui"
import { Icons } from "@/ui/icons"

import { NavigationContainer, HeaderLinkText } from "./styles"

export const Navigation = () => (
  <NavigationContainer>
    <Link href="/contacts/create" variant={ButtonVariants.SECONDARY}>
      <Icon name={Icons.plus} />
      <HeaderLinkText>Add contact</HeaderLinkText>
    </Link>
    <Link href="/settings" variant={ButtonVariants.SECONDARY}>
      <Icon name={Icons.cog} />
      <HeaderLinkText>Settings</HeaderLinkText>
    </Link>
  </NavigationContainer>
)
