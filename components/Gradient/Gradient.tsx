import { Contact } from "@/types"

import { GradientContainer } from "./styles"

type GradientProps = {
  contact: Contact
  palette: string[]
  smooth?: boolean
}

export const Gradient = ({
  contact,
  palette,
  smooth = true,
}: GradientProps) => <GradientContainer palette={palette} smooth={smooth} />
