import React from "react"

import { NavigationContainer, HeaderLink, HeaderLinkText } from "./styles"

export const Navigation = () => (
  <NavigationContainer>
    <HeaderLink href="/contacts/new">
      <HeaderLinkText>Add contact</HeaderLinkText>
    </HeaderLink>
    <HeaderLink href="/settings">
      <HeaderLinkText>Settings</HeaderLinkText>
    </HeaderLink>
  </NavigationContainer>
)
