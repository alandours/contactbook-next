import { icons, Icons } from "@/ui/icons"
import { theme } from "@/ui/palette"

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
