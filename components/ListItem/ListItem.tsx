import { ReactNode } from "react"

import { ContactLink } from "@/components/ContactLink"
import { Contact, ListItemType } from "@/types"

import { ListItemContainer } from "./styles"

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
  const showAge = !!localStorage.getItem("showAge")
  const showPhoto = !!localStorage.getItem("showPhoto")

  return (
    <ListItemContainer type={type} sticky={sticky}>
      {contact ? (
        <ContactLink
          contact={contact}
          showAge={showAge}
          showPhoto={showPhoto}
        />
      ) : (
        children
      )}
    </ListItemContainer>
  )
}
