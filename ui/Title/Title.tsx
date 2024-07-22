import { ReactNode } from "react"

import { TitleContainer } from "./styles"

interface TitleProps {
  className?: string
  children: ReactNode
}

export const Title = ({ className = "", children }: TitleProps) => (
  <TitleContainer className={className}>{children}</TitleContainer>
)
