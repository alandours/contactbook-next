import { ButtonHTMLAttributes, ReactNode } from "react"

import { ButtonVariants } from "@/types"

import { ButtonContainer } from "./styles"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariants
  handleClick?: () => void
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
