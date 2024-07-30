import { useContext } from 'react'

import { ContactsContext } from '@/features/contacts/context'

import { GradientContainer } from './styles'

interface GradientProps {
  smooth?: boolean
}

export const Gradient = ({ smooth = true }: GradientProps) => {
  const { palette } = useContext(ContactsContext)

  return <GradientContainer $palette={palette} $smooth={smooth} />
}
