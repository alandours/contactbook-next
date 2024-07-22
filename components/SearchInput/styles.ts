import styled, { css } from "styled-components"

import { Icon } from "@/ui"
import { zindex } from "@/ui/constants"

export const SearchInputContainer = styled.div`
  background: ${({ theme }) => theme.selected.main[1]};
  position: sticky;
  top: 0;
  z-index: ${zindex.fixed};
`

export const SearchIcon = styled(Icon)`
  color: ${({ theme }) => theme.selected.contrast[3]};
  font-size: 0.8rem;
  left: 6px;
  position: absolute;
  top: 9px;
  transition: all 420ms ease;
  transition-property: color;
`

export const SearchInputElement = styled.input<{ $hasIcon: boolean }>`
  ${({ theme, $hasIcon }) => css`
    background: ${theme.selected.main[1]};
    border: 0;
    border-color: ${theme.selected.main[2]};
    border-radius: 4px 0 0 0;
    color: ${theme.selected.contrast[1]};
    padding: 0.375rem;
    transition: all 420ms ease;
    transition-property: background, border;
    width: 100%;

    ${!!$hasIcon &&
    `
      padding-left: 1.75rem;
    `}

    &::placeholder {
      transition: all 420ms ease;
      transition-property: color;
    }

    &:hover,
    &:focus {
      border-color: ${theme.selected.main[2]};
    }
  `}
`
