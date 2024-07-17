import { Input } from '@/ui'

import { FormField, RemoveButton } from './styles'

interface SingleFieldProps {
  name: string
  label: string
  removeField: () => void
}

export const SingleField = ({ name, label, removeField }: SingleFieldProps) => (
  <FormField>
    <Input name={name} label={label} />
    <RemoveButton handleClick={removeField} />
  </FormField>
)
