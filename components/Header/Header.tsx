"use client"

import React from "react"
import Image from "next/image"

import { Icon } from "@/components/Icon"
import { Navigation } from "@/components/Navigation"
import { Icons } from "@/utils/icons"

import { HeaderContainer, Sitename, ToggleMenuButton, Sitelink } from "./styles"

export const Header = () => {
  return (
    <HeaderContainer>
      <Sitename>
        <ToggleMenuButton type="button">
          <Icon name={Icons.menu} />
        </ToggleMenuButton>
        <Sitelink href="/">
          <Image src="/logo.png" alt="ContactBook" width={30} height={30} />
        </Sitelink>
      </Sitename>
      <Navigation />
    </HeaderContainer>
  )
}
