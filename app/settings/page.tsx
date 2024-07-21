"use client"

import { PageHeader } from "@/components/PageHeader"
import { ColorSettings, ContactsSettings } from "@/features/settings"

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
