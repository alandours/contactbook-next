import { ReactNode } from "react"

import { LabelContainer, LabelText } from "./styles"

type LabelProps = {
  label: string
  disabled?: boolean
  children: ReactNode
}

export const Label = ({ label, disabled = false, children }: LabelProps) => (
  <LabelContainer label={label}>
    {label && !disabled && <LabelText>{label}</LabelText>}
    {children}
  </LabelContainer>
)
