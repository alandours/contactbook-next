import { useContext, useState } from "react"

import { ProfilePicture } from "@/components/ProfilePicture"
import { ContactsContext } from "@/features/contacts/context"
import { Backdrop } from "@/ui"

import { FullSizePicture } from "./styles"

export const MainProfilePicture = () => {
  const { selectedContact } = useContext(ContactsContext)

  const [isOpen, setIsOpen] = useState(false)

  const { photo, name, lastname } = selectedContact || {}

  return (
    name && (
      <>
        {isOpen && (
          <Backdrop
            handleClick={() => setIsOpen(false)}
            handleKeyDown={() => setIsOpen(false)}
          >
            <FullSizePicture
              src={`/img/contacts/${photo}`}
              alt={`${name} ${lastname}'s profile picture`}
            />
          </Backdrop>
        )}
        <ProfilePicture handleClick={() => setIsOpen(true)} />
      </>
    )
  )
}
