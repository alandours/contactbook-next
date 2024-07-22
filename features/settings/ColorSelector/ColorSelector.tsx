import { Colors, colors } from "@/ui/palette"

import { ColorSelectorContainer, ColorBox } from "./styles"

interface ColorSelectorProps {
  colorKey: Colors
  handleClick: (color: Colors) => void
}

export const ColorSelector = ({
  colorKey,
  handleClick,
}: ColorSelectorProps) => {
  const colorName = colors[colorKey].name

  return (
    <ColorSelectorContainer
      onClick={() => handleClick(colorKey)}
      title={colorName}
      aria-label={colorName}
    >
      <ColorBox selectorColor={colorKey} />
    </ColorSelectorContainer>
  )
}
