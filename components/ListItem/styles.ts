import styled, { css } from "styled-components"

import { zindex } from "@/ui/constants"
import { FontWeight } from "@/ui/typography"
import { ListItemType } from "@/types"

export const ListItemContainer = styled.li<{
  type: ListItemType
  $sticky: boolean
}>`
  ${({ theme, type, $sticky }) => css`
    & + & {
      border-top: 1px solid ${theme.selected.main[2]};
    }

    ${type === ListItemType.CONTACT &&
    css`
      background: transparent;
      transition: 400ms ease;

      &:hover {
        background: ${theme.selected.main[2]};
        transition: 200ms ease;
      }
    `};

    ${type === ListItemType.INITIAL &&
    css`
      background: ${theme.mainColor.main};
      border-bottom: 2px solid ${theme.mainColor.dark};
      color: ${theme.selected.main[1]};
      font-weight: ${FontWeight.SEMIBOLD};
      padding: 0.45rem 0.75rem;
      z-index: ${zindex.tooltip};
    `};

    ${$sticky &&
    css`
      position: sticky;
      top: 30px;
    `};

    transition: all 420ms ease;
    transition-property: border, color;
  `}
`
