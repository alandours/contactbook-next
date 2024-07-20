import React from "react"

import { Icon } from "@/components/Icon"
import { theme } from "@/theme/palette"
import { Icons } from "@/utils/icons"

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
