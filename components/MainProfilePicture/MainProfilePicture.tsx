import { useContext, useState } from "react"

import { Backdrop } from "@/components/Backdrop"
import { ProfilePicture } from "@/components/ProfilePicture"
import { ContactsContext } from "@/context/contacts"
import { Contact } from "@/types"
import { formatFullName } from "@/utils/contacts"

import { FullSizePicture } from "./styles"

type MainProfilePictureProps = {
  contact: Contact
}

export const MainProfilePicture = ({ contact }: MainProfilePictureProps) => {
  const { setPalette } = useContext(ContactsContext)

  const [isOpen, setIsOpen] = useState(false)

  const { photo, name, lastname } = contact || {}

  return (
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
      <ProfilePicture
        contact={contact}
        setPalette={setPalette}
        handleClick={() => setIsOpen(true)}
      />
    </>
  )
}
