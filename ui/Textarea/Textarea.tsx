import { useFormContext } from "react-hook-form"

import { ErrorMessage } from "@/ui"

import { TextareaContainer } from "./styles"

type TextareaProps = {
  name: string
  error: string
  placeholder?: string
}

export const Textarea = ({ name, error, placeholder = "" }: TextareaProps) => {
  const { register } = useFormContext()

  return (
    <>
      <TextareaContainer {...register(name)} placeholder={placeholder} />
      <ErrorMessage>{error}</ErrorMessage>
    </>
  )
}
