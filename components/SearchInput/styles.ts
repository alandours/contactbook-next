import styled from "styled-components"
import { formStyles } from "@/theme/screen"
import { zindex } from "@/constants"

export const SearchInputContainer = styled.div`
  background: ${({ theme }) => theme.selected.main[1]};
  position: sticky;
  top: 0;
  z-index: ${zindex.fixed};
`

export const SearchInputElement = styled.input<{ hasIcon: boolean }>`
  ${formStyles};
  background: ${({ theme }) => theme.selected.main[1]};
  border-color: ${({ theme }) => theme.selected.main[2]};
  border-radius: 4px 0 0 0;
  transition: all 420ms ease;
  transition-property: background, border;

  &::placeholder {
    transition: all 420ms ease;
    transition-property: color;
  }

  &:hover,
  &:focus {
    border-color: ${({ theme }) => theme.selected.main[2]};
  }
`
