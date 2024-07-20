import { useContext } from "react"

import { Gradient } from "@/components/Gradient"
import { MainProfilePicture } from "@/components/MainProfilePicture"
import { Icon } from "@/components/Icon"
import { ContactsContext } from "@/context/contacts"
import { theme } from "@/theme/palette"
import { ButtonVariants } from "@/types"
import { Icons } from "@/utils/icons"

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
          variant={ButtonVariants.ROUND}
        >
          <Icon name={Icons.pen} color={theme.selected.main[1]} />
        </EditLink>
      </MainInfoContainer>
    </>
  )
}
