import styled, { css } from "styled-components"
import Link from "next/link"
import { buttonStyles, linkStyles } from "@/theme/screen"
import { LinkVariants } from "@/types"

export const ContactBookLinkContainer = styled(Link)<{ variant: LinkVariants }>`
  ${linkStyles};

  ${({ variant }) =>
    variant === LinkVariants.ROUND &&
    css`
      ${buttonStyles};
      border-radius: 50%;
      height: 35px;
      min-width: 35px;
      padding: 0;
    `}
`
