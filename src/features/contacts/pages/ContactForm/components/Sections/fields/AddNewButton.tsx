import { ReactNode, useContext } from 'react'

import { Button, Icon } from '@/ui'
import { UIContext } from '@/ui/context'
import { Icons } from '@/ui/icons'

import { AddNewButtonContainer } from './styles'
import { ButtonVariants } from '@/types'

interface AddNewButtonProps {
  handleClick: () => void
  children: ReactNode
}

export const AddNewButton = ({ handleClick, children }: AddNewButtonProps) => {
  const { theme } = useContext(UIContext)

  return (
    <AddNewButtonContainer
      handleClick={handleClick}
      variant={ButtonVariants.SECONDARY}
    >
      <Icon name={Icons.plus} color={theme.selected.contrast[1]} />
      {children}
    </AddNewButtonContainer>
  )
}
