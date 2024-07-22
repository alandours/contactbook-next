import React, { useState, useRef, useContext } from "react"

import { ContactsContext } from "@/features/contacts/context"
import { DEFAULT_PHOTOS, getMainColor } from "@/ui/palette"
import { getPalette } from "@/ui/utils"

import { ProfilePictureContainer } from "./styles"
interface ProfilePictureProps {
  thumbnail?: boolean
  handleClick?: () => void
}

export const ProfilePicture = ({
  thumbnail = false,
  handleClick,
}: ProfilePictureProps) => {
  const { selectedContact, palette, setPalette } = useContext(ContactsContext)
  const [uploaded, setUploaded] = useState(null)
  const imageRef = useRef(null)

  const { photo, name, lastname } = selectedContact || {}

  const handlePalette = () => {
    if (thumbnail || uploaded) return
    const currentPalette = getPalette(imageRef.current, 10)
    if (!palette || currentPalette.toString() !== palette.toString()) {
      setPalette(currentPalette)
    }
  }

  return (
    <ProfilePictureContainer
      src={DEFAULT_PHOTOS[getMainColor()]}
      alt={`${name} ${lastname}'s profile picture`}
      thumbnail={thumbnail}
      ref={imageRef}
      onLoad={handlePalette}
      onClick={photo ? handleClick : undefined}
    />
  )
}
