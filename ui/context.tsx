"use client"

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react"

import { Settings, getLocalSettings } from "@/features/settings/settings"
import { Status } from "@/types"
import {
  Colors,
  ThemeColor,
  colors,
  palette,
  getTheme,
  getMainColor,
} from "@/ui/palette"

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
  themeKey: ThemeColor
  colorKey: Colors
  setTheme: Dispatch<SetStateAction<Theme>>
  toggleMenu: () => void
  setToast: (toast: Toast | null) => void
  updateSetting: (setting: Settings, active: boolean) => void
}

const initialValues: UIContextValues = {
  theme: initialTheme,
  settings: {
    [Settings.FILTER_FAVORITES]: false,
    [Settings.SHOW_AGE]: false,
    [Settings.SHOW_FAVORITE_ICON]: false,
    [Settings.SHOW_PHOTO]: false,
    [Settings.SORT_BY_LAST_NAME]: false,
  },
  menuOpen: false,
  toast: null,
  themeKey: ThemeColor.LIGHT,
  colorKey: Colors.GREEN,
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
  const [theme, setTheme] = useState(initialValues.theme)
  const [menuOpen, setMenuOpen] = useState(false)
  const [toast, setToast] = useState<Toast | null>(null)
  const [settings, setSettings] = useState(initialValues.settings)
  const [themeKey, setThemeKey] = useState(initialValues.themeKey)
  const [colorKey, setColorKey] = useState(initialValues.colorKey)

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

  const setLocalData = () => {
    const themeKey = getTheme()
    const colorKey = getMainColor()

    setThemeKey(themeKey)
    setColorKey(colorKey)

    setSettings(getLocalSettings())
    setTheme({
      selected: palette[themeKey],
      mainColor: colors[colorKey],
    })
  }

  useEffect(() => {
    setLocalData()
  }, [])

  return (
    <UIContext.Provider
      value={{
        theme,
        settings,
        menuOpen,
        toast,
        themeKey,
        colorKey,
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
