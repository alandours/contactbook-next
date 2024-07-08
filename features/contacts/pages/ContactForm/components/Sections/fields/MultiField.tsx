import { useWatch } from 'react-hook-form'
import { EmailType, NumberType } from '@prisma/client'

import { Input, Select } from '@/ui'

import { FormField, Option, RemoveButton } from './styles'

interface MultiFieldProps {
  label: string
  names: {
    input: string
    select: string
    custom: string
  }
  options: string[] | { id: string; name: string }[]
  customType?: NumberType | EmailType
  removeField: () => void
}

export const MultiField = ({
  label,
  names,
  options,
  customType,
  removeField,
}: MultiFieldProps) => {
  const type = useWatch({ name: names.select })

  return (
    <FormField>
      <Input name={names.input} label={label} />
      <Select name={names.select}>
        {options.map((option) =>
          typeof option === 'string' ? (
            <Option key={option} value={option}>
              {option}
            </Option>
          ) : (
            <Option key={option?.id} value={option?.id}>
              {option?.name}
            </Option>
          )
        )}
      </Select>
      <Input
        name={names.custom}
        disabled={!customType || customType !== type}
        label="Custom name"
      />
      <RemoveButton type="button" handleClick={removeField} />
    </FormField>
  )
}
