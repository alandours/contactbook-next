import { ReactNode } from 'react'
import { useFormContext } from 'react-hook-form'

import { Icons } from '@/ui/icons'

import { SelectContainer, Selector, SelectWrapper } from './styles'

interface SelectProps {
  name: string
  children?: ReactNode
}

export const Select = ({ name, children }: SelectProps) => {
  const { register } = useFormContext()

  return (
    <SelectWrapper>
      <SelectContainer {...register(name)}>{children}</SelectContainer>
      <Selector name={Icons.chevronDown} size="0.75rem" />
    </SelectWrapper>
  )
}
