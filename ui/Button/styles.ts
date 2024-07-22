import styled, { DefaultTheme, css } from "styled-components"

import { ButtonVariants } from "@/types"
import { FontSize, FontWeight } from "@/ui/typography"

export const buttonStyles = ({
  theme,
  $variant,
  highlight,
}: {
  theme: DefaultTheme
  $variant: ButtonVariants
  highlight?: boolean
}) => css`
  align-items: center;
  background: none;
  border: 0;
  border-radius: 0.25rem;
  cursor: pointer;
  display: flex;
  font-size: ${FontSize.TEXT};
  font-weight: ${FontWeight.REGULAR};
  gap: 0.5rem;
  justify-content: center;
  padding: 0.5rem 1rem;
  transition: all ease 200ms;

  &:hover,
  &:focus {
    transition: all ease 100ms;
  }

  ${$variant === ButtonVariants.MAIN &&
  css`
    background: ${theme.mainColor.main};
    color: ${theme.selected.main[1]};

    &:hover,
    &:focus {
      background: ${({ theme }) => theme.mainColor.light};
    }
  `}

  ${$variant === ButtonVariants.SECONDARY &&
  css`
    color: ${theme.selected.contrast[1]};

    &:hover,
    &:focus {
      color: ${theme.selected.contrast[2]};
    }

    ${!!highlight &&
    css`
      color: ${theme.mainColor.dark};

      &:hover,
      &:focus {
        color: ${theme.mainColor.main};
      }
    `};
  `}

  ${$variant === ButtonVariants.TERTIARY &&
  css`
    color: ${theme.selected.contrast[2]};

    &:hover,
    &:focus {
      color: ${theme.selected.contrast[3]};

      & > svg {
        color: ${theme.selected.contrast[3]} !important;
      }
    }
  `}

  ${$variant === ButtonVariants.MAIN_ROUND &&
  css`
    background: ${theme.mainColor.main};
    border-radius: 100%;
    color: ${theme.selected.main[1]};
    height: 2.25rem;
    padding: 0;
    min-width: 2.25rem;

    &:hover,
    &:focus {
      background: ${theme.mainColor.light};
    }
  `}

  ${$variant === ButtonVariants.DATAFIELD &&
  css`
    color: ${theme.selected.contrast[3]};
    padding: 0.5rem 0.75rem;
    justify-content: flex-start;

    &:hover,
    &:focus {
      background: ${theme.selected.main[2]};
    }
  `}

  ${$variant === ButtonVariants.DANGER &&
  css`
    background: ${theme.selected.danger.main};
    color: ${theme.selected.main[1]};

    &:hover,
    &:focus {
      background: ${theme.selected.danger.light};
    }
  `}

  ${$variant === ButtonVariants.LINK &&
  css`
    color: ${theme.mainColor.dark};
    padding: 0;

    &:hover,
    &:focus {
      color: ${theme.mainColor.main};
    }
  `}
`

export const ButtonContainer = styled.button<{
  $variant: ButtonVariants
}>`
  ${buttonStyles}
`
