import styled from "styled-components"

import { screen } from "@/theme/screen"
import { FontSize, FontWeight } from "@/theme/typography"

export const NavigationContainer = styled.div`
  align-items: center;
  display: flex;
`

export const HeaderLinkText = styled.span`
  display: none;
  font-size: ${FontSize.TEXT};
  font-weight: ${FontWeight.REGULAR};
  margin-left: 0.5rem;

  ${screen.md(`
    display: block;
  `)}
`
