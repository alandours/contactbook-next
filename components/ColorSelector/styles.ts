import styled, { css } from "styled-components"
import { color, Colors } from "@/ui/palette"

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
  ${({ selectorColor }) =>
    !!selectorColor &&
    css`
      background: ${color[selectorColor].main};
    `};

  border: 2px solid ${({ theme }) => theme.selected.main[1]};
  border-radius: 100%;
  box-shadow: 0 0 5px ${({ theme }) => theme.selected.contrast[4]};
  height: 30px;
  transition: all 420ms ease;
  transition-property: border, box-shadow;
  width: 30px;
`

export const Label = styled.div`
  color: ${({ theme }) => theme.selected.contrast[1]};
`
