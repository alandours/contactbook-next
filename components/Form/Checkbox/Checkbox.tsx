import { useFormContext } from "react-hook-form"

import { Icon } from "@/components/Icon"
import { theme } from "@/theme/palette"
import { Icons } from "@/utils/icons"

import { CheckboxContainer, CheckboxText, OriginalCheckbox } from "./styles"

type CheckboxProps = {
  name: string
  label?: string
  className?: string
}

export const Checkbox = ({ name, label, className = "" }: CheckboxProps) => {
  const { register, watch } = useFormContext()

  const isChecked = watch(name)

  return (
    <CheckboxContainer className={className}>
      <Icon
        name={isChecked ? Icons.checkboxActive : Icons.checkbox}
        color={theme.mainColor.main}
      />
      <CheckboxText>{label}</CheckboxText>
      <OriginalCheckbox type="checkbox" {...register(name)} />
    </CheckboxContainer>
  )
}
