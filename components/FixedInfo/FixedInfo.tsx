import { ProfilePicture } from "@/components/ProfilePicture"
import { Contact } from "@/types"
import { formatFullName } from "@/utils/contacts"

import { FixedInfoContainer, Name } from "./styles"

type FixedInfoProps = {
  contact: Contact
  isForm: boolean
}

export const FixedInfo = ({ contact, isForm = false }: FixedInfoProps) => {
  const { name, lastname } = contact

  return (
    <FixedInfoContainer>
      <ProfilePicture contact={contact} thumbnail />
      <Name>{formatFullName(name, lastname) || "New contact"}</Name>
    </FixedInfoContainer>
  )
}
