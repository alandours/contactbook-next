import { useWatch } from "react-hook-form"
import { EmailType, NumberType } from "@prisma/client"

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
        {options.map((option) => (
          <Option key={option?.id || option} value={option?.id || option}>
            {option?.name || option}
          </Option>
        ))}
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
