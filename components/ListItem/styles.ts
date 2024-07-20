import styled, { css } from "styled-components"

import { FontWeight } from "@/theme/typography"
import { zindex } from "@/constants"
import { ListItemType } from "@/types"

export const ListItemContainer = styled.li<{
  type: ListItemType
  sticky: boolean
}>`
  & + & {
    border-top: 1px solid ${({ theme }) => theme.selected.main[3]};
  }

  ${({ type }) =>
    type === ListItemType.CONTACT &&
    css`
      background: transparent;
      transition: 400ms ease;

      &:hover {
        background: ${({ theme }) => theme.selected.main[2]};
        transition: 200ms ease;
      }
    `};

  ${({ type }) =>
    type === ListItemType.INITIAL &&
    css`
      background: ${({ theme }) => theme.mainColor.main};
      border-bottom: 2px solid ${({ theme }) => theme.mainColor.dark};
      color: ${({ theme }) => theme.selected.main[1]};
      font-weight: ${FontWeight.SEMIBOLD};
      padding: 0.45rem 0.75rem;
      z-index: ${zindex.tooltip};
    `};

  ${({ sticky }) =>
    sticky &&
    css`
      position: sticky;
      top: 27px;
    `};

  transition: all 420ms ease;
  transition-property: border, color;
`
