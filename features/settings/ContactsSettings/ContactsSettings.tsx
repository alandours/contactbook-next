"use client"

import { useContext } from "react"

import { Section } from "@/components/Section"
import { ContactsContext } from "@/features/contacts/context"
import { Setting } from "@/features/settings/Setting"
import { Switch } from "@/ui"
import { UIContext } from "@/ui/context"
import { Settings } from "@/ui/palette"

export const ContactsSettings = () => {
  const { settings, updateSetting } = useContext(UIContext)
  const { filters, updateFilters } = useContext(ContactsContext)

  const toggleFavoriteIcon = (active: boolean) =>
    updateSetting(Settings.SHOW_FAVORITE_ICON, active)

  const toggleFavoritesOnly = (active: boolean) =>
    updateFilters({ key: "favorite", value: active, remove: !active })

  const toggleShowAge = (active: boolean) =>
    updateSetting(Settings.SHOW_AGE, active)

  const toggleShowPhoto = (active: boolean) =>
    updateSetting(Settings.SHOW_PHOTO, active)

  return (
    <Section title="Contacts">
      <Setting label="Show age">
        <Switch active={settings.showAge} handleClick={toggleShowAge} />
      </Setting>
      <Setting label="Show photo">
        <Switch active={settings.showPhoto} handleClick={toggleShowPhoto} />
      </Setting>
      <Setting label="Show favorite icon">
        <Switch
          active={settings.showFavoriteIcon}
          handleClick={toggleFavoriteIcon}
        />
      </Setting>
      <Setting label="Show favorites only">
        <Switch active={!!filters.favorite} handleClick={toggleFavoritesOnly} />
      </Setting>
    </Section>
  )
}
