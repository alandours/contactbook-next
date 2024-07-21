import { ReactNode, useContext } from "react"

import { ContactLink } from "@/components/ContactLink"
import { Contact, ListItemType } from "@/types"

import { ListItemContainer } from "./styles"
import { UIContext } from "@/ui/context"

interface ListItemProps {
  contact?: Contact
  type?: ListItemType
  sticky?: boolean
  children?: ReactNode
}

export const ListItem = ({
  contact,
  type = ListItemType.CONTACT,
  sticky = false,
  children,
}: ListItemProps) => {
  const { settings } = useContext(UIContext)

  return (
    <ListItemContainer type={type} $sticky={sticky}>
      {contact ? (
        <ContactLink
          contact={contact}
          showAge={settings.showAge}
          showPhoto={settings.showPhoto}
        />
      ) : (
        children
      )}
    </ListItemContainer>
  )
}
