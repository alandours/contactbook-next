import { useContext } from "react"

import { Gradient } from "@/components/Gradient"
import { MainProfilePicture } from "@/components/MainProfilePicture"
import { Icon } from "@/components/Icon"
import { ContactsContext } from "@/context/contacts"
import { LinkVariants } from "@/types"

import { ProfileData } from "../ProfileData"

import { MainInfoContainer, EditLink } from "./styles"

export const MainInfo = () => {
  const { selectedContact } = useContext(ContactsContext)

  const { id } = selectedContact || {}

  return (
    <>
      <Gradient smooth />
      <MainInfoContainer>
        <MainProfilePicture />
        <ProfileData />
        <EditLink
          url={`/contacts/${id}/edit`}
          title="Edit contact"
          variant={LinkVariants.ROUND}
        >
          <Icon icon="pen" color={["selected", "main", "1"]} />
        </EditLink>
      </MainInfoContainer>
    </>
  )
}
