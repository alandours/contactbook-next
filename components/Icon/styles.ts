import styled, { css } from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { getColor } from "@/theme/screen"

export const IconContainer = styled(FontAwesomeIcon)<{
  icon: string | string[]
  color?: string[]
  inline: boolean
}>`
  color: ${({ theme }) => theme.selected.contrast[2]};

  ${({ theme, color }) =>
    !!color &&
    !!color.length &&
    css`
      color: ${getColor(theme, color)};
    `};

  ${({ inline }) =>
    !!inline &&
    `
      margin-right: 0.75rem;
    `}

  ${({ icon }) =>
    icon === "home" &&
    `
      margin-left: -2px;
      margin-right: 0.65rem;
    `}
`
