"use client"

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react"

import { getContacts } from "@/actions/actions"
import { UIContext } from "@/ui/context"
import { Contact, Filters } from "@/types"

interface ContactsContextValues {
  contacts: Contact[]
  selectedContact: Contact | null
  loading: boolean | undefined
  filters: Filters
  palette: string[]
  fetchContacts: (search?: string) => void
  selectContact: (id: string) => void
  updateFilters: ({
    key,
    value,
    remove,
    persist,
  }: {
    key: string
    value?: any
    remove?: boolean
    persist?: boolean
  }) => void
  setPalette: Dispatch<SetStateAction<string[]>>
}

const initialValues: ContactsContextValues = {
  contacts: [],
  selectedContact: null,
  loading: undefined,
  filters: {},
  palette: [],
  fetchContacts: () => undefined,
  selectContact: () => undefined,
  updateFilters: () => undefined,
  setPalette: () => undefined,
}

export const ContactsContext =
  createContext<ContactsContextValues>(initialValues)

interface ContactsProviderProps {
  data: Contact[]
  children: ReactNode
}

export const ContactsProvider = ({ data, children }: ContactsProviderProps) => {
  const { settings } = useContext(UIContext)

  const [contacts, setContacts] = useState<Contact[]>(data)
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null)
  const [loading, setLoading] = useState<boolean>()
  const [filters, setFilters] = useState<Filters>(initialValues.filters)
  const [palette, setPalette] = useState<string[]>([])

  const fetchContacts = async () => {
    setLoading(true)

    let contacts = await getContacts(filters)

    contacts = [...contacts].sort((contact1, contact2) =>
      contact1.name.localeCompare(contact2.name)
    )

    setContacts(contacts)
    setLoading(false)
  }

  const selectContact = (id: string) => {
    setSelectedContact(contacts.find((contact) => contact.id === id) || null)
  }

  const updateFilters = ({
    key,
    value,
    remove,
    persist,
  }: {
    key: string
    value?: any
    remove?: boolean
    persist?: boolean
  }) => {
    if (value) {
      setFilters((prevFilters) => ({ ...prevFilters, [key]: value }))
    }

    if (persist) {
      localStorage.setItem(key, value)
    }

    if (remove) {
      localStorage.removeItem(key)
      setFilters((prevFilters) => {
        const newFilters = { ...prevFilters }
        delete newFilters[key]
        return newFilters
      })
    }
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
        fetchContacts,
        selectContact,
        updateFilters,
        setPalette,
      }}
    >
      {children}
    </ContactsContext.Provider>
  )
}
