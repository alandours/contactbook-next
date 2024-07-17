'use client'

import { ReactNode, useContext } from 'react'

import { UIContext } from '@/ui/context'

import { SidebarContainer } from './styles'

interface SidebarProps {
  children: ReactNode
}

export const Sidebar = ({ children }: SidebarProps) => {
  const { menuOpen } = useContext(UIContext)

  return <SidebarContainer open={menuOpen}>{children}</SidebarContainer>
}
