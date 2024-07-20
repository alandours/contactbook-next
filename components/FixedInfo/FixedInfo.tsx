import { useContext } from "react"

import { ProfilePicture } from "@/components/ProfilePicture"
import { ContactsContext } from "@/context/contacts"
import { formatFullName } from "@/utils/contacts"

import { FixedInfoContainer, Name } from "./styles"

export const FixedInfo = () => {
  const { selectedContact } = useContext(ContactsContext)
  const { name, lastname } = selectedContact || {}

  return (
    name && (
      <FixedInfoContainer>
        <ProfilePicture thumbnail />
        <Name>{formatFullName(name, lastname) || "New contact"}</Name>
      </FixedInfoContainer>
    )
  )
}
