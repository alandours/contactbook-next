import { useContext } from "react"
import { ContactsContext } from "@/context/contacts"

import { GradientContainer } from "./styles"

type GradientProps = {
  smooth?: boolean
}

export const Gradient = ({ smooth = true }: GradientProps) => {
  const { palette } = useContext(ContactsContext)

  return <GradientContainer palette={palette} smooth={smooth} />
}
