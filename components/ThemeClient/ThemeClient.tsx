"use client"

import { ThemeProvider } from "styled-components"

import { theme } from "@/theme/palette"

type ThemeClientProps = {
  children: React.ReactNode
}

export const ThemeClient = ({ children }: ThemeClientProps) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)
