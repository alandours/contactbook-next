import React from "react"

import { Icon } from "@/ui"
import { theme } from "@/ui/palette"
import { Icons } from "@/ui/icons"

import { FavoriteButtonContainer } from "./styles"

export const FavoriteButton = ({ isFavorite, id }) => {
  const icon = isFavorite ? Icons.heartFull : Icons.heart
  const title = isFavorite ? "Remove from favorites" : "Add to favorites"

  return (
    <FavoriteButtonContainer type="button" title={title}>
      <Icon name={icon} color={theme.mainColor.main} />
    </FavoriteButtonContainer>
  )
}
