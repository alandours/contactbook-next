"use client"

import { ReactNode } from "react"

import { SidebarContainer } from "./styles"

type SidebarProps = {
  children: ReactNode
}

export const Sidebar = ({ children }: SidebarProps) => (
  <SidebarContainer open={false}>{children}</SidebarContainer>
)
