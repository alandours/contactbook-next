"use client"

import { ReactNode } from "react"

import { MainContentContainer } from "./styles"

type MainContentProps = {
  children: ReactNode
}

export const MainContent = ({ children }: MainContentProps) => (
  <MainContentContainer>{children}</MainContentContainer>
)
