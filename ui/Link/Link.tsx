import { ReactNode } from "react"

import { ButtonVariants } from "@/types"

import { NextLink, AnchorLink } from "./styles"

type LinkProps = {
  url: string
  highlight?: boolean
  title?: string
  variant?: ButtonVariants
  className?: string
  external?: boolean
  children: ReactNode
}

export const Link = ({
  url,
  highlight = false,
  title,
  variant = ButtonVariants.TEXT,
  className = "",
  external = false,
  children,
}: LinkProps) => {
  const props = { href: url, highlight, title, variant, className }

  if (external) {
    return <AnchorLink {...props}>{children}</AnchorLink>
  }

  return <NextLink {...props}>{children}</NextLink>
}
