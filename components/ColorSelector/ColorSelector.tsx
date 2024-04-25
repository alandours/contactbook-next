import { Colors } from "@/theme/palette"

import { ColorSelectorContainer, ColorBox, Label } from "./styles"

type ColorSelectorProps = {
  color: Colors
  label: string
  handleClick: (color: Colors) => void
}

export const ColorSelector = ({
  color,
  label,
  handleClick,
}: ColorSelectorProps) => (
  <ColorSelectorContainer onClick={() => handleClick(color)}>
    <ColorBox selectorColor={color} />
    <Label>{label}</Label>
  </ColorSelectorContainer>
)
