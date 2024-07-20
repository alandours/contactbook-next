import React from "react"
import { useFormContext } from "react-hook-form"

import { Icon } from "@/components/Icon"
import { ErrorMessage } from "@/components/Form/ErrorMessage"
import { Label } from "@/components/Form/Label"
import { Icons } from "@/utils/icons"

import { InputContainer, Container } from "./styles"

type InputProps = HTMLInputElement & {
  name: string
  label: string
  icon?: Icons
  defaultValue: string | number
  error: string
  size: string
}

export const Input = ({
  name,
  type,
  label,
  disabled,
  placeholder,
  icon,
  defaultValue,
  error,
  size,
}: InputProps) => {
  const { register } = useFormContext()

  return (
    <Label label={label} disabled={disabled}>
      <Container>
        {icon && <Icon name={icon} />}
        <InputContainer
          {...register(name)}
          type={type || "text"}
          disabled={disabled}
          placeholder={placeholder}
          defaultValue={defaultValue}
          size={size}
          label={label}
        />
      </Container>
      <ErrorMessage>{error}</ErrorMessage>
    </Label>
  )
}
