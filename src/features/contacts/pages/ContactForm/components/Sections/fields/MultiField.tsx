import { Controller, useFormContext, useWatch } from 'react-hook-form'
import { EmailType, NumberType } from '@prisma/client'

import { Input, Select } from '@/ui'
import { OptionData } from '@/ui/Select'

import { FormField, RemoveButton } from './styles'

interface MultiFieldProps<CustomType> {
  label: {
    input: string
    select: string
  }
  names: {
    input: string
    select: string
    custom: string
  }
  options: { label: string; value: string }[]
  isLastField: boolean
  customType?: CustomType
  removeField: () => void
}

export const MultiField = <CustomType,>({
  label,
  names,
  options,
  isLastField,
  customType,
  removeField,
}: MultiFieldProps<CustomType>) => {
  const { control } = useFormContext()
  const input = useWatch({ name: names.input })
  const type = useWatch({ name: names.select })

  return (
    <FormField $labelMargin={false}>
      <Input name={names.input} label={label.input} />
      <Controller
        name={names.select}
        control={control}
        render={({ field: { value, onChange } }) => {
          return (
            <Select<OptionData, false>
              label={label.select}
              options={options}
              value={
                options.find((option) => option.value === value) as OptionData
              }
              onChange={(selectedOption) => {
                if (selectedOption && 'value' in selectedOption) {
                  onChange(selectedOption.value)
                }
              }}
              isSearchable
              menuPortalTarget={document.querySelector('body')}
            />
          )
        }}
      />
      <Input
        name={names.custom}
        disabled={!customType || customType !== type}
        label="Custom name"
      />
      {(!isLastField || !!input) && (
        <RemoveButton type="button" handleClick={removeField} />
      )}
    </FormField>
  )
}
