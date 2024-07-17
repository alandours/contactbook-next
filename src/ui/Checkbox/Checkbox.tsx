import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'

import { Icon } from '@/ui'
import { UIContext } from '@/ui/context'
import { Icons } from '@/ui/icons'

import { CheckboxContainer, CheckboxText, OriginalCheckbox } from './styles'

interface CheckboxProps {
  name: string
  label?: string
  className?: string
}

export const Checkbox = ({ name, label, className = '' }: CheckboxProps) => {
  const { theme } = useContext(UIContext)
  const { register, watch } = useFormContext()

  const isChecked = watch(name)

  return (
    <CheckboxContainer className={className}>
      <Icon
        name={isChecked ? Icons.checkboxActive : Icons.checkbox}
        color={theme.mainColor.main}
      />
      <CheckboxText>{label}</CheckboxText>
      <OriginalCheckbox type="checkbox" {...register(name)} />
    </CheckboxContainer>
  )
}
