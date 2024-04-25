import { ReactNode } from "react"

import { Title } from "@/components/Title"
import { Subtitle } from "@/components/Subtitle"

import { PageHeaderContainer } from "./styles"

type PageHeaderProps = {
  title?: string
  subtitle?: string
  className?: string
  children: ReactNode
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
