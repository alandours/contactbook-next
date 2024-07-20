import React from "react"

import { Icon } from "@/components/Icon"

import { FavoriteButtonContainer } from "./styles"

export const FavoriteButton = ({ isFavorite, id }) => {
  const icon = isFavorite ? ["fas", "heart"] : ["far", "heart"]
  const title = isFavorite ? "Remove from favorites" : "Add to favorites"

  return (
    <FavoriteButtonContainer
      type="button"
      title={title}
      // onClick={() => dispatch(toggleFavorite(id, !isFavorite))}
    >
      <Icon icon={icon} color={["mainColor", "main"]} />
    </FavoriteButtonContainer>
  )
}
