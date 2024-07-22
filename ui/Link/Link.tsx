import { AnchorHTMLAttributes, ReactNode } from "react"

import { ButtonVariants } from "@/types"

import { NextLink, AnchorLink } from "./styles"

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  title?: string
  variant?: ButtonVariants
  highlight?: boolean
  className?: string
  external?: boolean
  children: ReactNode
}

export const Link = ({
  href,
  title,
  variant = ButtonVariants.LINK,
  highlight = false,
  className = "",
  external = false,
  children,
  onClick,
}: LinkProps) => {
  const props = {
    href,
    title,
    $variant: variant,
    $highlight: highlight,
    className,
    onClick,
  }

  if (external) {
    return (
      <AnchorLink {...props} target="_blank" rel="noopener noreferrer">
        {children}
      </AnchorLink>
    )
  }

  return <NextLink {...props}>{children}</NextLink>
}
