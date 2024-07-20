import styled, { css } from "styled-components"

import { formStyles, screen } from "@/theme/screen"
import { FontSize, FontWeight } from "@/theme/typography"

export const Container = styled.div`
  position: relative;
  width: 100%;
`

export const InputContainer = styled.input<{ label: string; size: string }>`
  ${formStyles};

  ${({ label }) =>
    !!label &&
    `
    margin: 1rem;
  `}

  ${({ type }) =>
    type === "date" &&
    `
    &::-webkit-calendar-picker-indicator {
        filter: invert(0.5);
    }
  `}

  ${({ size: inputSize }) =>
    inputSize === "big" &&
    css`
      font-size: ${FontSize.LARGE};
      font-weight: ${FontWeight.BOLD};
      padding-left: 0;
      width: 100%;

      ${screen.xs(`
        font-size: ${FontSize.XL};
      `)}

      ${screen.lg(`
        font-size: ${FontSize.XXL};
      `)}
    `}

  &:disabled {
    background: ${({ theme }) => theme.selected.main[3]};

    ${screen.md(`
      background: transparent;
      border: 0;
    `)}
  }
`
