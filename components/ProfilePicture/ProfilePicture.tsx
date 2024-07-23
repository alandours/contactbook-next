import { useState, useRef, useEffect, useContext } from "react"
import { useFormContext } from "react-hook-form"

import { ROUTES } from "@/constants/routes"
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
  const { watch } = useFormContext() || {}
  const imageRef = useRef<HTMLImageElement>(null)

  const { photo, name, lastname } = selectedContact || {}

  const imageField = watch && watch("file")
  const uploadedImage = imageField && imageField[0]

  useEffect(() => {
    if (uploadedImage) {
      setUploaded(URL.createObjectURL(uploadedImage))
    }
  }, [uploadedImage])

  const handlePalette = () => {
    if (thumbnail || uploaded || !imageRef.current) {
      return
    }

    const currentPalette = getPalette(imageRef.current, 10)

    if (
      currentPalette &&
      (!palette || currentPalette?.toString() !== palette.toString())
    ) {
      setPalette(currentPalette)
    }
  }

  return (
    <ProfilePictureContainer
      src={
        uploaded ||
        (photo ? ROUTES.profilePictures(photo) : DEFAULT_PHOTOS[getMainColor()])
      }
      alt={`${name} ${lastname}'s profile picture`}
      $thumbnail={thumbnail}
      ref={imageRef}
      onLoad={handlePalette}
      onClick={photo ? handleClick : undefined}
      width={360}
      height={360}
      quality={100}
    />
  )
}
