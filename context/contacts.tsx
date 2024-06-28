"use client"

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react"

import { getContacts } from "@/actions/actions"
import { Contact } from "@/types"

interface ContactsContextValues {
  contacts: Contact[]
  loading: boolean | undefined
  palette: string[]
  fetchContacts: (search?: string) => void
  setSearch: Dispatch<SetStateAction<string | undefined>>
  setPalette: Dispatch<SetStateAction<string[]>>
}

const initialValues: ContactsContextValues = {
  contacts: [],
  loading: undefined,
  palette: [],
  fetchContacts: () => undefined,
  setSearch: () => undefined,
  setPalette: () => undefined,
}

export const ContactsContext =
  createContext<ContactsContextValues>(initialValues)

interface ContactsProviderProps {
  data: Contact[]
  children: ReactNode
}

export const ContactsProvider = ({ data, children }: ContactsProviderProps) => {
  const [contacts, setContacts] = useState<Contact[]>(data)
  const [loading, setLoading] = useState<boolean>()
  const [search, setSearch] = useState<string>()
  const [palette, setPalette] = useState<string[]>([])

  const fetchContacts = async () => {
    setLoading(true)

    let contacts = await getContacts(search)

    if (localStorage.getItem("favoritesOnly")) {
      contacts = contacts.filter((contact) => contact.favorite)
    }

    setContacts(contacts)
    setLoading(false)
  }

  useEffect(() => {
    if (search !== undefined) {
      fetchContacts()
    }
  }, [search])

  return (
    <ContactsContext.Provider
      value={{
        contacts,
        loading,
        palette,
        fetchContacts,
        setSearch,
        setPalette,
      }}
    >
      {children}
    </ContactsContext.Provider>
  )
}
