import { PageHeader } from '@/components/PageHeader'
import { ColorSettings } from '@/features/settings/ColorSettings'
import { ContactsSettings } from '@/features/settings/ContactsSettings'

import { SettingsContainer } from './styles'

export const Settings = () => (
  <SettingsContainer>
    <PageHeader title="Settings" />
    <ContactsSettings />
    <ColorSettings />
  </SettingsContainer>
)
