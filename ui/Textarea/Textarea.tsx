import { useFormContext } from 'react-hook-form'
import { ErrorMessage as HookFormErrorMessage } from '@hookform/error-message'

import { ErrorMessage } from '@/ui'

import { TextareaContainer } from './styles'

interface TextareaProps {
  name: string
  placeholder?: string
}

export const Textarea = ({ name, placeholder = '' }: TextareaProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <>
      <TextareaContainer {...register(name)} placeholder={placeholder} />
      <HookFormErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => <ErrorMessage>{message}</ErrorMessage>}
      />
    </>
  )
}
