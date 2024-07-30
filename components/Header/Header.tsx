"use client"

import { useContext } from "react"
import Image from "next/image"

import { Navigation } from "@/components/Navigation"
import { ROUTES } from "@/constants/routes"
import { Icon, Link } from "@/ui"
import { UIContext } from "@/ui/context"
import { Icons } from "@/ui/icons"

import { HeaderContainer, Sitename, ToggleMenuButton } from "./styles"

export const Header = () => {
  const { toggleMenu } = useContext(UIContext)

  return (
    <HeaderContainer>
      <Sitename>
        <ToggleMenuButton type="button" onClick={toggleMenu}>
          <Icon name={Icons.menu} />
        </ToggleMenuButton>
        <Link href={ROUTES.contacts.main}>
          <Image src="/logo.png" alt="ContactBook" width={30} height={30} />
        </Link>
      </Sitename>
      <Navigation />
    </HeaderContainer>
  )
}
