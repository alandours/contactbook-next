import styled from "styled-components"

import { formStyles, screen } from "@/theme/screen"

export const SelectWrapper = styled.div`
  position: relative;
`

export const SelectContainer = styled.select`
  ${formStyles};
  appearance: none;
  border: 1px solid ${({ theme }) => theme.selected.contrast[4]};
  border-radius: 3px;
  cursor: pointer;
  display: grid;
  margin: 1rem 0 1.75rem 0;
  padding: 0.25rem;
  width: 100%;

  ${screen.md(`
    margin: 0 1.5rem;
    width: 200px;
  `)}

  &:hover, &:focus {
    border: 1px solid ${({ theme }) => theme.mainColor.main};
  }
`
