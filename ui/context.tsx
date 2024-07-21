"use client"

import { ReactNode, createContext, useState } from "react"

import { Status } from "@/types"

type Toast = { message: string; type: Status }

interface UIContextValues {
  menuOpen: boolean
  toast: Toast | null
  toggleMenu: () => void
  setToast: (toast: Toast | null) => void
}

const initialValues: UIContextValues = {
  menuOpen: false,
  toast: null,
  toggleMenu: () => undefined,
  setToast: () => undefined,
}

export const UIContext = createContext<UIContextValues>(initialValues)

interface UIProviderProps {
  children: ReactNode
}

export const UIProvider = ({ children }: UIProviderProps) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [toast, setToast] = useState<Toast | null>(null)

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState)
  }

  return (
    <UIContext.Provider
      value={{
        menuOpen,
        toast,
        toggleMenu,
        setToast,
      }}
    >
      {children}
    </UIContext.Provider>
  )
}
