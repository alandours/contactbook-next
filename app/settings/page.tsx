import { Metadata } from 'next'

import { Settings } from '@/features/settings/pages/Settings'

export const metadata: Metadata = {
  title: 'ContactBook | Settings',
}

export default function SettingsPage() {
  return <Settings />
}
