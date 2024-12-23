import { useState, useRef, useEffect, useContext } from 'react'
import { useFormContext } from 'react-hook-form'

import { ROUTES } from '@/constants/routes'
import { ContactsContext } from '@/features/contacts/context'
import { Contact } from '@/types'
import { DEFAULT_PHOTOS, getMainColor } from '@/ui/palette'
import { getPalette } from '@/ui/utils'

import { ProfilePictureContainer } from './styles'

interface ProfilePictureProps {
  contact: Contact | null
  thumbnail?: boolean
  handleClick?: () => void
}

export const ProfilePicture = ({
  contact,
  thumbnail = false,
  handleClick,
}: ProfilePictureProps) => {
  const { palette, setPalette } = useContext(ContactsContext)
  const [uploaded, setUploaded] = useState<string | null>(null)
  const { watch } = useFormContext() || {}
  const imageRef = useRef<HTMLImageElement>(null)

  const { photo, name, lastname } = contact || {}

  const imageField = watch && watch('file')
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

  const size = thumbnail ? 60 : 360

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
      width={size}
      height={size}
      quality={100}
    />
  )
}
