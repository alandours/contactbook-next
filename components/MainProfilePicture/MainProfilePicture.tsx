import { useContext, useState } from "react"

import { Backdrop } from "@/components/Backdrop"
import { ProfilePicture } from "@/components/ProfilePicture"
import { ContactsContext } from "@/context/contacts"
import { formatFullName } from "@/utils/contacts"

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
              alt={`${formatFullName(name, lastname)}'s profile picture`}
            />
          </Backdrop>
        )}
        <ProfilePicture handleClick={() => setIsOpen(true)} />
      </>
    )
  )
}
