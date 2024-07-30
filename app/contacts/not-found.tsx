import { Metadata } from 'next'

import { NotFound } from '@/components/NotFound'
import { NotFoundType } from '@/types'

export const metadata: Metadata = {
  title: 'Not found :(',
}

export default function NotFoundPage() {
  return <NotFound page={NotFoundType.CONTACT} />
}
