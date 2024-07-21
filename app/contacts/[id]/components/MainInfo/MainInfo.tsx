import { useContext } from "react"

import { Gradient } from "@/components/Gradient"
import { MainProfilePicture } from "@/components/MainProfilePicture"
import { Icon } from "@/ui"
import { ContactsContext } from "@/context/contacts"
import { theme } from "@/ui/palette"
import { ButtonVariants } from "@/types"
import { Icons } from "@/ui/icons"

import { ProfileData } from "../ProfileData"

import { MainInfoContainer, EditLink } from "./styles"
import { ROUTES } from "@/constants/routes"

export const MainInfo = () => {
  const { selectedContact } = useContext(ContactsContext)

  const { id } = selectedContact || {}

  return (
    id && (
      <>
        <Gradient smooth />
        <MainInfoContainer>
          <MainProfilePicture />
          <ProfileData />
          <EditLink
            href={ROUTES.contacts.edit(id)}
            title="Edit contact"
            variant={ButtonVariants.MAIN_ROUND}
          >
            <Icon name={Icons.pen} color={theme.selected.main[1]} />
          </EditLink>
        </MainInfoContainer>
      </>
    )
  )
}
