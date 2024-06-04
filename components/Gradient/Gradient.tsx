import { Contact } from "@/types"

import { GradientContainer } from "./styles"

type GradientProps = {
  palette: string[]
  smooth?: boolean
}

export const Gradient = ({ palette, smooth = true }: GradientProps) => (
  <GradientContainer palette={palette} smooth={smooth} />
)
