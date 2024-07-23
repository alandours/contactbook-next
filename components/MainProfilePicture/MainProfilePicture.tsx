import { useContext, useState } from "react"
import Image from "next/image"

import { ProfilePicture } from "@/components/ProfilePicture"
import { ROUTES } from "@/constants/routes"
import { ContactsContext } from "@/features/contacts/context"
import { Backdrop } from "@/ui"

import { FullSizeImageContainer } from "./styles"

export const MainProfilePicture = () => {
  const { selectedContact } = useContext(ContactsContext)

  const [isOpen, setIsOpen] = useState(false)

  const { photo, name, lastname } = selectedContact || {}

  return (
    name && (
      <>
        {isOpen && photo && (
          <Backdrop
            handleClick={() => setIsOpen(false)}
            handleKeyDown={() => setIsOpen(false)}
          >
            <FullSizeImageContainer>
              <Image
                src={ROUTES.profilePictures(photo)}
                alt={`${name} ${lastname}'s profile picture`}
                fill
                objectFit="contain"
                quality={100}
              />
            </FullSizeImageContainer>
          </Backdrop>
        )}
        <ProfilePicture handleClick={() => setIsOpen(true)} />
      </>
    )
  )
}
