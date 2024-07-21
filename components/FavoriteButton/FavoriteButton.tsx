"use client"

import { useState } from "react"

import { updateFavorite } from "@/actions/actions"
import { Icon } from "@/ui"
import { theme } from "@/ui/palette"
import { Icons } from "@/ui/icons"

import { FavoriteButtonContainer } from "./styles"

interface FavoriteButtonProps {
  id: string
  isFavorite: boolean
}

export const FavoriteButton = ({ id, isFavorite }: FavoriteButtonProps) => {
  const [favorite, setFavorite] = useState(isFavorite)
  const [loading, setLoading] = useState(false)

  const icon = favorite ? Icons.heartFull : Icons.heart
  const title = favorite ? "Remove from favorites" : "Add to favorites"

  const toggleFavorite = async () => {
    setLoading(true)
    const user = await updateFavorite(id, !favorite)
    setFavorite(user.favorite)
    setLoading(false)
  }

  return (
    <FavoriteButtonContainer
      type="button"
      title={title}
      disabled={loading}
      onClick={toggleFavorite}
    >
      <Icon name={icon} color={theme.mainColor.main} />
    </FavoriteButtonContainer>
  )
}
