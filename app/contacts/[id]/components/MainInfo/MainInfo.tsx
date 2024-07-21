import { useContext } from "react"

import { Gradient } from "@/ui/Gradient"
import { MainProfilePicture } from "@/components/MainProfilePicture"
import { ROUTES } from "@/constants/routes"
import { ContactsContext } from "@/context/contacts"
import { ButtonVariants } from "@/types"
import { Icon } from "@/ui"
import { UIContext } from "@/ui/context"
import { Icons } from "@/ui/icons"

import { ProfileData } from "../ProfileData"

import { MainInfoContainer, EditLink } from "./styles"

export const MainInfo = () => {
  const { theme } = useContext(UIContext)
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
