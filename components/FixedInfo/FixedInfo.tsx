import { useContext } from "react"

import { ProfilePicture } from "@/components/ProfilePicture"
import { ContactsContext } from "@/features/contacts/context"

import { FixedInfoContainer, Name } from "./styles"

export const FixedInfo = () => {
  const { selectedContact } = useContext(ContactsContext)
  const { name, lastname } = selectedContact || {}

  return (
    name && (
      <FixedInfoContainer>
        <ProfilePicture thumbnail />
        <Name>{`${name} ${lastname}` || "New contact"}</Name>
      </FixedInfoContainer>
    )
  )
}
