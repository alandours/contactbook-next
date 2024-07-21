import styled, { css } from "styled-components"

import { Icon } from "@/ui"
import { responsive } from "@/ui/responsive"

export const SelectWrapper = styled.div`
  position: relative;
`

export const Selector = styled(Icon)`
  color: ${({ theme }) => theme.selected.contrast[3]};
  font-size: 0.8rem;
  margin-top: -6px;
  position: absolute;
  right: 1rem;
  top: 43%;

  ${responsive.md(`
    right: 2rem;
    top: 50%;
  `)}
`

export const SelectContainer = styled.select`
  ${({ theme }) => css`
    appearance: none;
    border: 1px solid ${theme.selected.contrast[4]};
    border-radius: 3px;
    cursor: pointer;
    display: grid;
    margin: 1rem 0 1.75rem 0;
    padding: 0.25rem;
    width: 100%;

    ${responsive.md(`
      margin: 0 1.5rem;
      width: 200px;
    `)}

    &:hover, &:focus {
      border: 1px solid ${theme.mainColor.main};
    }

    &:hover + ${Selector}, &:focus + ${Selector} {
      color: ${theme.mainColor.main};
    }
  `}
`
