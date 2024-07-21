import styled, { css } from "styled-components"
import { colors, Colors } from "@/ui/palette"

export const ColorSelectorContainer = styled.button`
  appearance: none;
  padding: 0;
  border: 0;
  outline: 0;
  background-color: transparent;
  cursor: pointer;

  & + & {
    margin-left: 0.5rem;
  }
`

export const ColorBox = styled.div<{ selectorColor: Colors }>`
  ${({ theme, selectorColor }) => css`
    ${!!selectorColor &&
    css`
      background: ${colors[selectorColor].main};
    `};

    border: 2px solid ${theme.selected.main[1]};
    border-radius: 100%;
    box-shadow: 0 0 5px ${theme.selected.contrast[4]};
    height: 30px;
    transition: all 420ms ease;
    transition-property: border, box-shadow;
    width: 30px;
  `}
`
