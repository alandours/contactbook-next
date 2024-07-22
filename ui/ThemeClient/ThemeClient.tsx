"use client"

import { useContext } from "react"
import { ThemeProvider } from "styled-components"

import { UIContext } from "@/ui/context"

interface ThemeClientProps {
  children: React.ReactNode
}

export const ThemeClient = ({ children }: ThemeClientProps) => {
  const { theme } = useContext(UIContext)

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
