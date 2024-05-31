import { useFormContext } from "react-hook-form"

import { CheckboxContainer, CheckboxText, OriginalCheckbox } from "./styles"

type CheckboxProps = {
  name: string
  label?: string
  className?: string
}

export const Checkbox = ({ name, label, className = "" }: CheckboxProps) => {
  const { register, watch } = useFormContext()

  return (
    <CheckboxContainer className={className}>
      <CheckboxText>{label}</CheckboxText>
      <OriginalCheckbox type="checkbox" {...register(name)} />
    </CheckboxContainer>
  )
}
