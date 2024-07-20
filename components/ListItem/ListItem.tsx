import { ReactNode, useContext } from "react"

import { ContactLink } from "@/components/ContactLink"
import { ContactsContext } from "@/context/contacts"
import { ListItemType } from "@/types"

import { ListItemContainer } from "./styles"

interface ListItemProps {
  type?: ListItemType
  sticky?: boolean
  children?: ReactNode
}

export const ListItem = ({
  type = ListItemType.CONTACT,
  sticky = false,
  children,
}: ListItemProps) => {
  const { selectedContact } = useContext(ContactsContext)

  const showAge = !!localStorage.getItem("showAge")
  const showPhoto = !!localStorage.getItem("showPhoto")

  return (
    <ListItemContainer type={type} sticky={sticky}>
      {selectedContact ? (
        <ContactLink showAge={showAge} showPhoto={showPhoto} />
      ) : (
        children
      )}
    </ListItemContainer>
  )
}
