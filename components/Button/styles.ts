import styled, { css } from "styled-components"
import { buttonStyles, linkStyles } from "@/theme/screen"
import { ButtonVariants } from "@/types"

export const ButtonContainer = styled.button<{ variant: ButtonVariants }>`
  ${buttonStyles};
  display: flex;
  gap: 0.5rem;

  ${({ variant }) =>
    (variant === ButtonVariants.TEXT ||
      variant === ButtonVariants.TEXT_DANGER) &&
    css`
      ${linkStyles};
    `}
`
