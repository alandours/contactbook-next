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
  settings: {
    filterFavorites: boolean
    showAge: boolean
    showFavoriteIcon: boolean
    showPhoto: boolean
    sortByLastName: boolean
  }
  menuOpen: boolean
  toast: Toast | null
  setTheme: Dispatch<SetStateAction<Theme>>
  toggleMenu: () => void
  setToast: (toast: Toast | null) => void
  updateSetting: (setting: Settings, active: boolean) => void
}

export enum Settings {
  FILTER_FAVORITES = "filterFavorites",
  SHOW_AGE = "showAge",
  SHOW_FAVORITE_ICON = "showFavoriteIcon",
  SHOW_PHOTO = "showPhoto",
  SORT_BY_LAST_NAME = "sortByLastName",
}

const getLocalSetting = (setting: Settings) => !!localStorage.getItem(setting)

const initialValues: UIContextValues = {
  theme: initialTheme,
  settings: {
    [Settings.FILTER_FAVORITES]: getLocalSetting(Settings.FILTER_FAVORITES),
    [Settings.SHOW_AGE]: getLocalSetting(Settings.SHOW_AGE),
    [Settings.SHOW_FAVORITE_ICON]: getLocalSetting(Settings.SHOW_FAVORITE_ICON),
    [Settings.SHOW_PHOTO]: getLocalSetting(Settings.SHOW_PHOTO),
    [Settings.SORT_BY_LAST_NAME]: getLocalSetting(Settings.SORT_BY_LAST_NAME),
  },
  menuOpen: false,
  toast: null,

  setTheme: () => undefined,
  toggleMenu: () => undefined,
  setToast: () => undefined,
  updateSetting: () => undefined,
}

export const UIContext = createContext<UIContextValues>(initialValues)

interface UIProviderProps {
  children: ReactNode
}

export const UIProvider = ({ children }: UIProviderProps) => {
  const [theme, setTheme] = useState(getTheme())
  const [menuOpen, setMenuOpen] = useState(false)
  const [toast, setToast] = useState<Toast | null>(null)
  const [settings, setSettings] = useState(initialValues.settings)

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState)
  }

  const updateSetting = (setting: Settings, active: boolean) => {
    if (active) {
      localStorage.setItem(setting, "true")
    } else {
      localStorage.removeItem(setting)
    }

    setSettings((prevSettings) => ({ ...prevSettings, [setting]: active }))
  }

  return (
    <UIContext.Provider
      value={{
        theme,
        settings,
        menuOpen,
        toast,
        setTheme,
        updateSetting,
        toggleMenu,
        setToast,
      }}
    >
      {children}
    </UIContext.Provider>
  )
}
