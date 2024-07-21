import styled, { css } from "styled-components"

import { responsive } from "@/ui/responsive"
import { FontSize, FontWeight } from "@/ui/typography"
import { zindex } from "@/constants"

export const HeaderContainer = styled.header`
  ${({ theme }) => css`
    background: ${theme.selected.main[2]};
    box-shadow: 0 2px 6px 0 ${theme.selected.main.shadow};
    color: ${theme.selected.contrast[1]};
    display: flex;
    justify-content: space-between;
    padding: 1rem 1.5rem;
    position: fixed;
    transition: all 420ms ease;
    transition-property: background, box-shadow;
    width: 100%;
    z-index: ${zindex.fixed};

    ${responsive.md(`
      background: ${theme.selected.main[1]};
      position: initial;
    `)}
  `}
`

export const Sitename = styled.div`
  font-size: ${FontSize.XL};
  font-family: Avenir;
  font-weight: ${FontWeight.SEMIBOLD};
  display: flex;
`

export const ToggleMenuButton = styled.button`
  align-items: center;
  appearance: none;
  padding: 0;
  border: 0;
  outline: 0;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  font-size: ${FontSize.LARGE};
  margin-right: 1rem;

  ${responsive.md(`
    display: none;
  `)}
`
