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
import { Contact, Status } from "@/types"

type Toast = { message: string; type: Status }

interface ContactsContextValues {
  contacts: Contact[]
  loading: boolean | undefined
  palette: string[]
  toast: Toast | null
  fetchContacts: (search?: string) => void
  setSearch: Dispatch<SetStateAction<string | undefined>>
  setPalette: Dispatch<SetStateAction<string[]>>
  setToast: (toast: Toast | null) => void
}

const initialValues: ContactsContextValues = {
  contacts: [],
  loading: undefined,
  palette: [],
  toast: null,
  fetchContacts: () => undefined,
  setSearch: () => undefined,
  setPalette: () => undefined,
  setToast: () => undefined,
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
  const [toast, setToast] = useState<Toast | null>(null)

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
        toast,
        fetchContacts,
        setSearch,
        setPalette,
        setToast,
      }}
    >
      {children}
    </ContactsContext.Provider>
  )
}
