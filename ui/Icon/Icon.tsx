import { theme } from "@/theme/palette"
import { icons, Icons } from "@/utils/icons"

type IconProps = {
  name: Icons
  color?: string
  size?: string
  className?: string
}

export const Icon = ({
  name,
  color = theme.selected.contrast[1],
  size = "1.25rem",
  className = "",
}: IconProps) => {
  const IconComponent = icons[name]

  if (!IconComponent) return null

  return (
    <IconComponent
      color={color}
      size={size}
      role="presentation"
      className={className}
    />
  )
}
