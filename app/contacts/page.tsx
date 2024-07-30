import { Metadata } from 'next'

import { Dashboard } from '@/features/contacts/pages/Dashboard'

export const metadata: Metadata = {
  title: 'ContactBook',
}

export default async function ContactsPage() {
  return <Dashboard />
}
