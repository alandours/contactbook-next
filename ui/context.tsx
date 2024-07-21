"use client"

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react"

import { Status } from "@/types"
import { Colors, ThemeColor, colors, palette, getTheme } from "./palette"

type Toast = { message: string; type: Status }

type Theme = {
  selected: (typeof palette)[ThemeColor]
  mainColor: (typeof colors)[Colors]
}

export const initialTheme = {
  selected: palette[ThemeColor.LIGHT],
  mainColor: colors[Colors.GREEN],
}

interface UIContextValues {
  theme: Theme
  menuOpen: boolean
  toast: Toast | null
  setTheme: Dispatch<SetStateAction<Theme>>
  toggleMenu: () => void
  setToast: (toast: Toast | null) => void
}

const initialValues: UIContextValues = {
  theme: initialTheme,
  menuOpen: false,
  toast: null,
  setTheme: () => undefined,
  toggleMenu: () => undefined,
  setToast: () => undefined,
}

export const UIContext = createContext<UIContextValues>(initialValues)

interface UIProviderProps {
  children: ReactNode
}

export const UIProvider = ({ children }: UIProviderProps) => {
  const [theme, setTheme] = useState(getTheme())
  const [menuOpen, setMenuOpen] = useState(false)
  const [toast, setToast] = useState<Toast | null>(null)

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState)
  }

  return (
    <UIContext.Provider
      value={{
        theme,
        menuOpen,
        toast,
        setTheme,
        toggleMenu,
        setToast,
      }}
    >
      {children}
    </UIContext.Provider>
  )
}
