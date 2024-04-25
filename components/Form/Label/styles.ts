import styled, { css } from "styled-components"
import { FontSize, FontWeight } from "@/theme/typography"
import { screen } from "@/theme/screen"

export const LabelContainer = styled.label<{ label: string }>`
  background: ${({ theme }) => theme.selected.main[1]};
  display: flex;
  flex-direction: column;
  position: relative;
  min-width: 30%;
  width: 100%;

  ${({ label }) =>
    screen.md(`
  width: 40%;

  ${
    label === "Alias" &&
    css`
      width: 207px;
    `
  }
`)}

  & + & {
    ${screen.md(`
      margin-left: 1rem;
    `)}
  }
`

export const LabelText = styled.span`
  color: ${({ theme }) => theme.selected.contrast[2]};
  font-size: ${FontSize.SMALL};
  font-weight: ${FontWeight.LIGHT};
  left: 0;
  position: absolute;
  top: -1rem;
`
