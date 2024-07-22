import { Input, Select } from "@/ui"

import { FormField, Option, RemoveButton } from "./styles"

interface MultiFieldProps {
  label: string
  names: {
    input: string
    select: string
    custom: string
  }
  options: string[] | { id: string; name: string }[]
  removeField: () => void
}

export const MultiField = ({
  label,
  names,
  options,
  removeField,
}: MultiFieldProps) => {
  return (
    <FormField>
      <Input name={names.input} label={label} />
      <Select name={names.select}>
        {options.map((option) => (
          <Option key={option?.id || option} value={option?.id || option}>
            {option?.name || option}
          </Option>
        ))}
      </Select>
      <Input name={names.custom} disabled={false} label="Custom name" />
      <RemoveButton type="button" handleClick={removeField} />
    </FormField>
  )
}
