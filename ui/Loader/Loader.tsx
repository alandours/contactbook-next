import React, { useContext } from "react"

import { Icon } from "@/ui"
import { Icons } from "@/ui/icons"

import { LoaderContainer } from "./styles"
import { UIContext } from "../context"

export const Loader = () => {
  const { theme } = useContext(UIContext)

  return (
    <LoaderContainer>
      <Icon name={Icons.spinner} color={theme.mainColor.main} size="2rem" />
    </LoaderContainer>
  )
}
