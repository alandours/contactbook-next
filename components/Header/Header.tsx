"use client"

import Image from "next/image"

import { Navigation } from "@/components/Navigation"

import { HeaderContainer, Sitename, ToggleMenuButton, Sitelink } from "./styles"

export const Header = () => (
  <HeaderContainer>
    <Sitename>
      <ToggleMenuButton type="button">Toggle</ToggleMenuButton>
      <Sitelink href="/">
        <Image src="/logo.png" alt="ContactBook" width={30} height={30} />
      </Sitelink>
    </Sitename>
    <Navigation />
  </HeaderContainer>
)
