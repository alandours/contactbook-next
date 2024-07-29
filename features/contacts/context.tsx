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
import { Contact, Filters } from "@/types"

interface ContactsContextValues {
  contacts: Contact[]
  selectedContact: Contact | null
  loading: boolean | undefined
  filters: Filters
  palette: string[]
  selectContact: (contact: Contact) => void
  updateFilters: ({
    key,
    value,
    remove,
    persist,
  }: {
    key: keyof Filters
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
  selectContact: () => null,
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
  const [contacts, setContacts] = useState<Contact[]>(data)
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null)
  const [loading, setLoading] = useState<boolean>()
  const [filters, setFilters] = useState<Filters>(initialValues.filters)
  const [palette, setPalette] = useState<string[]>([])

  const selectContact = (contact: Contact) => setSelectedContact(contact)

  const updateFilters = ({
    key,
    value,
    remove,
    persist,
  }: {
    key: keyof Filters
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
    setContacts(data)
  }, [data])

  useEffect(() => {
    const fetchContacts = async () => {
      setLoading(true)

      const contacts = await getContacts(filters)

      setContacts(contacts)
      setLoading(false)

      return contacts
    }

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
        selectContact,
        updateFilters,
        setPalette,
      }}
    >
      {children}
    </ContactsContext.Provider>
  )
}
