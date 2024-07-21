import styled, { css } from "styled-components"

import { responsive } from "@/ui/responsive"
import { FontSize, FontWeight } from "@/ui/typography"

export const Container = styled.div`
  position: relative;
  width: 100%;
`

export const InputContainer = styled.input<{ size: string }>`
  ${({ theme, type, size }) => css`
    border: 0;
    border-bottom: 1px solid ${theme.selected.contrast[4]};
    color: ${theme.selected.contrast[1]};

    &:hover,
    &:focus {
      border-bottom: 1px solid ${theme.mainColor.main};
    }

    &::placeholder {
      color: ${theme.selected.contrast[1]};
    }

    ${type === "date" &&
    `
      &::-webkit-calendar-picker-indicator {
          filter: invert(0.5);
      }
    `}

    ${size === "big" &&
    css`
      font-size: ${FontSize.LARGE};
      font-weight: ${FontWeight.BOLD};
      padding-left: 0;
      width: 100%;

      ${responsive.xs(`
        font-size: ${FontSize.XL};
      `)}

      ${responsive.lg(`
        font-size: ${FontSize.XXL};
      `)}
    `}

    &:disabled {
      background: ${({ theme }) => theme.selected.main[3]};

      ${responsive.md(`
        background: transparent;
        border: 0;
      `)}
    }
  `}
`
