"use client"

import { PageHeader } from "@/components/PageHeader"

import { ContactsSettings } from "./components/ContactsSettings"
import { ColorSettings } from "./components/ColorSettings"

import { SettingsContainer } from "./styles"

const Settings = () => {
  return (
    <SettingsContainer>
      <PageHeader title="Settings" />
      <ContactsSettings />
      <ColorSettings />
    </SettingsContainer>
  )
}

export default Settings
