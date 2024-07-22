import { icons, Icons } from "@/ui/icons"

interface IconProps {
  name: Icons
  color?: string
  size?: string
  className?: string
}

export const Icon = ({
  name,
  color = "#000",
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
