import styled from "styled-components"
import Link from "next/link"

import { screen } from "@/theme/screen"
import { FontSize, FontWeight } from "@/theme/typography"

export const NavigationContainer = styled.div`
  align-items: center;
  display: flex;
`
export const HeaderLink = styled(Link)`
  align-items: center;
  color: ${({ theme }) => theme.selected.contrast[1]};
  display: flex;
  font-size: ${FontSize.LARGE};
  transition: all 420ms ease;
  transition-property: color;

  ${screen.md`
    font-size: ${FontSize.BASE};
  `}

  & + & {
    margin-left: 1.5rem;

    ${screen.md`
      margin-left: 2rem;
    `}
  }
`

export const HeaderLinkText = styled.span`
  display: none;
  font-size: ${FontSize.TEXT};
  font-weight: ${FontWeight.REGULAR};
  margin-left: 0.5rem;

  ${screen.md`
    display: block;
  `}
`
