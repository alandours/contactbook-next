import { ReactNode } from "react"

import { ButtonContainer } from "./styles"
import { ButtonVariants } from "@/types"

type ButtonProps = HTMLButtonElement & {
  variant?: ButtonVariants
  handleClick: () => void
  children: ReactNode
}

export const Button = ({
  type = "button",
  variant = ButtonVariants.MAIN,
  handleClick,
  className = "",
  children,
}: ButtonProps) => (
  <ButtonContainer
    type={type}
    onClick={handleClick}
    variant={variant}
    className={className}
  >
    {children}
  </ButtonContainer>
)
