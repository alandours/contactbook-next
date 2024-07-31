import { Controller, useFormContext, useWatch } from 'react-hook-form'
import { EmailType, NumberType } from '@prisma/client'

import { Input, Select } from '@/ui'
import { OptionData } from '@/ui/Select'

import { FormField, RemoveButton } from './styles'

interface MultiFieldProps {
  label: string
  names: {
    input: string
    select: string
    custom: string
  }
  options: { label: string; value: string }[]
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
  const { control } = useFormContext()
  const type = useWatch({ name: names.select })

  return (
    <FormField>
      <Input name={names.input} label={label} />
      <Controller
        name={names.select}
        control={control}
        render={({ field: { value, onChange } }) => {
          // console.log(value)
          return (
            <Select
              label="Type"
              options={options}
              value={
                options.find((option) => option.value === value) as OptionData
              }
              onChange={(selectedOption) => {
                if (selectedOption && 'value' in selectedOption) {
                  onChange(selectedOption.value)
                }
              }}
              portalTarget={document.querySelector('body')}
            />
          )
        }}
      />
      <Input
        name={names.custom}
        disabled={!customType || customType !== type}
        label="Custom name"
      />
      <RemoveButton type="button" handleClick={removeField} />
    </FormField>
  )
}
