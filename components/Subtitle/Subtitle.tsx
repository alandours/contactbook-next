import React, { ReactNode } from "react"

import { SubtitleContainer } from "./styles"

type SubtitleProps = {
  className?: string
  children: ReactNode
}

export const Subtitle = ({ className = "", children }: SubtitleProps) => (
  <SubtitleContainer className={className}>{children}</SubtitleContainer>
)
