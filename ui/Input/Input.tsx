import React from "react"
import { useFormContext } from "react-hook-form"

import { ErrorMessage, Icon, Label } from "@/ui"
import { Icons } from "@/ui/icons"

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
        />
      </Container>
      <ErrorMessage>{error}</ErrorMessage>
    </Label>
  )
}
