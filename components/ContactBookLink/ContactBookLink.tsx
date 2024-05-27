import { ReactNode } from "react"
import { LinkVariants } from "@/types"

import { ContactBookLinkContainer } from "./styles"
import { WebTarget } from "styled-components"

type ContactBookLinkProps = {
  url: string
  type?: WebTarget
  highlight: boolean
  title: string
  variant?: LinkVariants
  className?: string
  children: ReactNode
}

export const ContactBookLink = ({
  url,
  type,
  highlight,
  title,
  variant = LinkVariants.MAIN,
  className = "",
  children,
}: ContactBookLinkProps) => (
  <ContactBookLinkContainer
    to={url}
    href={url}
    as={type}
    highlight={highlight}
    title={title}
    variant={variant}
    className={className}
  >
    {children}
  </ContactBookLinkContainer>
)
