import { Icon } from "@/components/Icon"

import { XButtonContainer } from "./styles"
import { ButtonHTMLAttributes } from "react"

interface XButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  handleClick: () => void
  className?: string
}

export const XButton = ({
  type,
  handleClick,
  className = "",
}: XButtonProps) => (
  <XButtonContainer type={type} handleClick={handleClick} className={className}>
    <Icon icon="times" />
  </XButtonContainer>
)
