import React from "react"

import { Icon } from "@/components/Icon"
import { Icons } from "@/utils/icons"

import { NavigationContainer, HeaderLink, HeaderLinkText } from "./styles"

export const Navigation = () => (
  <NavigationContainer>
    <HeaderLink href="/contacts/new">
      <Icon name={Icons.plus} />
      <HeaderLinkText>Add contact</HeaderLinkText>
    </HeaderLink>
    <HeaderLink href="/settings">
      <Icon name={Icons.cog} />
      <HeaderLinkText>Settings</HeaderLinkText>
    </HeaderLink>
  </NavigationContainer>
)
