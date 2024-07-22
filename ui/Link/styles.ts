import styled from "styled-components"
import Link from "next/link"

import { buttonStyles } from "@/ui/Button/styles"
import { ButtonVariants } from "@/types"

export const NextLink = styled(Link)<{
  $variant: ButtonVariants
  $highlight: boolean
}>`
  ${buttonStyles}
`

export const AnchorLink = styled.a<{
  $variant: ButtonVariants
  $highlight: boolean
}>`
  ${buttonStyles}
`
