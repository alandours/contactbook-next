import { ButtonHTMLAttributes } from "react"

import { Icon } from "@/components/Icon"
import { Icons } from "@/utils/icons"

import { XButtonContainer } from "./styles"

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
    <Icon name={Icons.times} />
  </XButtonContainer>
)
