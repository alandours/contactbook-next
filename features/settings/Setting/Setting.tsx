import { ReactNode } from "react"

import { SettingContainer, SettingLabel } from "./styles"

interface SettingProps {
  label: string
  labelFirst?: boolean
  children: ReactNode
}

export const Setting = ({
  label,
  labelFirst = false,
  children,
}: SettingProps) => (
  <SettingContainer>
    {children}
    <SettingLabel $labelFirst={labelFirst}>{label}</SettingLabel>
  </SettingContainer>
)
