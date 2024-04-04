"use client"

import { ThemeProvider } from "styled-components"

import { defaultTheme } from "@/theme/palette"

type ThemeClientProps = {
  children: React.ReactNode
}

export const ThemeClient = ({ children }: ThemeClientProps) => (
  <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
)
