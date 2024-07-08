import React, { InputHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'
import { ErrorMessage as HookFormErrorMessage } from '@hookform/error-message'

import { InputSizes } from '@/types'
import { ErrorMessage, Icon, Label } from '@/ui'
import { Icons } from '@/ui/icons'

import { InputContainer, Container } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
  icon?: Icons
  size?: InputSizes
}

export const Input = ({
  name,
  type,
  label,
  disabled,
  placeholder,
  icon,
  size = InputSizes.REGULAR,
}: InputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <Label label={label} disabled={disabled}>
      <Container>
        {icon && <Icon name={icon} />}
        <InputContainer
          {...register(name)}
          type={type || 'text'}
          disabled={disabled}
          placeholder={placeholder}
          size={size}
        />
      </Container>
      <HookFormErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => <ErrorMessage>{message}</ErrorMessage>}
      />
    </Label>
  )
}
