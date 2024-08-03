import { Input } from '@/ui'

import { FormField, RemoveButton } from './styles'

interface SingleFieldProps {
  name: string
  label: string
  isLastField: boolean
  removeField: () => void
}

export const SingleField = ({
  name,
  label,
  isLastField,
  removeField,
}: SingleFieldProps) => (
  <FormField>
    <Input name={name} label={label} />
    {!isLastField && <RemoveButton handleClick={removeField} />}
  </FormField>
)
