import { useContext } from "react"

import { MainProfilePicture } from "@/components/MainProfilePicture"
import { ROUTES } from "@/constants/routes"
import { ContactMainData } from "@/features/contacts"
import { ContactsContext } from "@/features/contacts/context"
import { ButtonVariants } from "@/types"
import { Gradient, Icon } from "@/ui"
import { UIContext } from "@/ui/context"
import { Icons } from "@/ui/icons"

import { ContactHeaderContainer, EditLink } from "./styles"

export const ContactHeader = () => {
  const { theme } = useContext(UIContext)
  const { selectedContact } = useContext(ContactsContext)

  const { id } = selectedContact || {}

  return (
    id && (
      <>
        <Gradient smooth />
        <ContactHeaderContainer>
          <MainProfilePicture />
          <ContactMainData />
          <EditLink
            href={ROUTES.contacts.edit(id)}
            title="Edit contact"
            variant={ButtonVariants.MAIN_ROUND}
          >
            <Icon name={Icons.pen} color={theme.selected.main[1]} />
          </EditLink>
        </ContactHeaderContainer>
      </>
    )
  )
}
