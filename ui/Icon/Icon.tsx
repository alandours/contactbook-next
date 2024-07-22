import { useContext } from "react"

import { UIContext } from "@/ui/context"
import { icons, Icons } from "@/ui/icons"
interface IconProps {
  name: Icons
  color?: string
  size?: string
  className?: string
}

export const Icon = ({
  name,
  color,
  size = "1rem",
  className = "",
}: IconProps) => {
  const { theme } = useContext(UIContext)

  const iconColor = color || theme.selected.contrast[2]

  const IconComponent = icons[name]

  if (!IconComponent) return null

  return (
    <IconComponent
      color={iconColor}
      size={size}
      role="presentation"
      className={className}
    />
  )
}
