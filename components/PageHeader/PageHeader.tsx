import { ReactNode } from "react"

import { Title, Subtitle } from "@/ui"

import { PageHeaderContainer } from "./styles"

interface PageHeaderProps {
  title?: string
  subtitle?: string
  className?: string
  children?: ReactNode
}

export const PageHeader = ({
  title,
  subtitle,
  className = "",
  children,
}: PageHeaderProps) => (
  <PageHeaderContainer className={className}>
    {!!title && <Title>{title}</Title>}
    {!!subtitle && <Subtitle>{subtitle}</Subtitle>}
    {children}
  </PageHeaderContainer>
)
