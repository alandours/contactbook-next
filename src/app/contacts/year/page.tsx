import { Metadata } from 'next'

import { getStats } from '@/actions/actions'
import { ContactsByYear } from '@/features/contacts/pages/ContactsByYear'

export const metadata: Metadata = {
  title: 'ContactBook | Years',
}

export default async function YearPage() {
  const stats = await getStats()

  return <ContactsByYear stats={stats} />
}
