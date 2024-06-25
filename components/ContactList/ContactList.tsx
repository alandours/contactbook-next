"use client"

import { useContext, KeyboardEvent, ReactNode } from "react"

import { ListItem } from "@/components/ListItem"
import { SearchInput } from "@/components/SearchInput"
import { Loader } from "@/components/Loader"
import { ContactsContext } from "@/context/contacts"
import { Contact } from "@/types"
import { getInitial } from "@/utils/contacts"

import { List, Count, ContactGroup } from "./styles"

const renderContactGroups = (contacts: Contact[]) => {
  const contactsByInitial: Record<string, ReactNode[]> = contacts.reduce(
    (acc, contact) => {
      const groupedByInitial: Record<string, ReactNode[]> = acc

      const { id, name } = contact
      const initial = getInitial(name)

      const Contact = <ListItem contact={contact} key={id} />

      groupedByInitial[initial] = groupedByInitial[initial]
        ? [...groupedByInitial[initial], Contact]
        : [Contact]

      return groupedByInitial
    },
    {}
  )

  const list = Object.keys(contactsByInitial).map((initial) => (
    <ContactGroup key={initial}>
      <ListItem type="letter" sticky>
        {initial}
      </ListItem>
      {contactsByInitial[initial]}
    </ContactGroup>
  ))

  return list
}

type ContactListProps = {
  hasSearch: boolean
}

export const ContactList = ({ hasSearch }: ContactListProps) => {
  const { contacts, loading, setSearch } = useContext(ContactsContext)

  const handleTyping = (e: KeyboardEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLInputElement
    setSearch(value)
  }

  return (
    <>
      {hasSearch && <SearchInput handleTyping={handleTyping} />}
      {loading ? (
        <Loader />
      ) : (
        <List>
          {renderContactGroups(contacts)}
          <Count>{`${contacts?.length} contacts`}</Count>
        </List>
      )}
    </>
  )
}
