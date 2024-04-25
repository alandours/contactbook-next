import { useFormContext } from "react-hook-form"

import { ErrorMessage } from "@/components/Form/ErrorMessage"

import { TextareaContainer } from "./styles"

type TextareaProps = {
  name: string
  error: string
  defaultValue?: string
  placeholder?: string
}

export const Textarea = ({
  name,
  error,
  defaultValue = "",
  placeholder = "",
}: TextareaProps) => {
  const { register } = useFormContext()

  return (
    <>
      <TextareaContainer
        {...register(name)}
        defaultValue={defaultValue}
        placeholder={placeholder}
      />
      <ErrorMessage>{error}</ErrorMessage>
    </>
  )
}
