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
import { Contact, Filters, Status } from "@/types"

type Toast = { message: string; type: Status }

interface ContactsContextValues {
  contacts: Contact[]
  selectedContact: Contact | null
  loading: boolean | undefined
  filters: Filters
  palette: string[]
  toast: Toast | null
  fetchContacts: (search?: string) => void
  selectContact: (id: string) => void
  setFilters: Dispatch<SetStateAction<Filters>>
  setPalette: Dispatch<SetStateAction<string[]>>
  setToast: (toast: Toast | null) => void
}

const initialValues: ContactsContextValues = {
  contacts: [],
  selectedContact: null,
  loading: undefined,
  filters: {},
  palette: [],
  toast: null,
  fetchContacts: () => undefined,
  selectContact: () => undefined,
  setFilters: () => undefined,
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
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null)
  const [loading, setLoading] = useState<boolean>()
  const [filters, setFilters] = useState<Filters>(initialValues.filters)
  const [palette, setPalette] = useState<string[]>([])
  const [toast, setToast] = useState<Toast | null>(null)

  const fetchContacts = async () => {
    setLoading(true)

    let contacts = await getContacts(filters)

    contacts = [...contacts].sort((contact1, contact2) =>
      contact1.name.localeCompare(contact2.name)
    )

    if (localStorage.getItem("favoritesOnly")) {
      contacts = contacts.filter((contact) => contact.favorite)
    }

    setContacts(contacts)
    setLoading(false)
  }

  const selectContact = (id: string) => {
    setSelectedContact(contacts.find((contact) => contact.id === id) || null)
  }

  useEffect(() => {
    fetchContacts()
  }, [filters])

  return (
    <ContactsContext.Provider
      value={{
        contacts,
        selectedContact,
        loading,
        filters,
        palette,
        toast,
        fetchContacts,
        selectContact,
        setFilters,
        setPalette,
        setToast,
      }}
    >
      {children}
    </ContactsContext.Provider>
  )
}
