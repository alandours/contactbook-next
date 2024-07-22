import { Metadata } from "next"

import { PageHeader } from "@/components/PageHeader"
import { ColorSettings } from "@/features/settings/ColorSettings"
import { ContactsSettings } from "@/features/settings/ContactsSettings"

import { SettingsContainer } from "./styles"

export const metadata: Metadata = {
  title: "ContactBook | Settings",
}

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
