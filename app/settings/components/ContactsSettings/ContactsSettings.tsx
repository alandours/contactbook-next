import React, { useContext } from "react"

import { Section } from "@/components/Section"
import { ToggleButton } from "@/components/ToggleButton"

import { Setting } from "../Setting"
import { ContactsContext } from "@/context/contacts"
import { Settings, UIContext } from "@/ui/context"

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
        <ToggleButton active={settings.showAge} handleClick={toggleShowAge} />
      </Setting>
      <Setting label="Show photo">
        <ToggleButton
          active={settings.showPhoto}
          handleClick={toggleShowPhoto}
        />
      </Setting>
      <Setting label="Show favorite icon">
        <ToggleButton
          active={settings.showFavoriteIcon}
          handleClick={toggleFavoriteIcon}
        />
      </Setting>
      <Setting label="Show favorites only">
        <ToggleButton
          active={!!filters.favorite}
          handleClick={toggleFavoritesOnly}
        />
      </Setting>
    </Section>
  )
}
