import { ReactNode } from "react"

import { TitleContainer } from "./styles"

type TitleProps = {
  className?: string
  children: ReactNode
}

export const Title = ({ className = "", children }: TitleProps) => (
  <TitleContainer className={className}>{children}</TitleContainer>
)
