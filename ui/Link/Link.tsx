import { AnchorHTMLAttributes, ReactNode } from "react"

import { ButtonVariants } from "@/types"

import { NextLink, AnchorLink } from "./styles"

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  highlight?: boolean
  title?: string
  variant?: ButtonVariants
  className?: string
  external?: boolean
  children: ReactNode
}

export const Link = ({
  href,
  highlight = false,
  title,
  variant = ButtonVariants.LINK,
  className = "",
  external = false,
  children,
}: LinkProps) => {
  const props = { href, highlight, title, variant, className }

  if (external) {
    return (
      <AnchorLink {...props} target="_blank" rel="noopener noreferrer">
        {children}
      </AnchorLink>
    )
  }

  return <NextLink {...props}>{children}</NextLink>
}
