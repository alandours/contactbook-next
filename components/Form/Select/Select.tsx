import { ReactNode } from "react"
import { useFormContext } from "react-hook-form"

import { SelectContainer, SelectWrapper } from "./styles"

type SelectProps = {
  name: string
  defaultValue?: string | number
  children?: ReactNode
}

export const Select = ({ name, defaultValue, children }: SelectProps) => {
  const { register } = useFormContext()

  return (
    <SelectWrapper>
      <SelectContainer {...register(name)} defaultValue={defaultValue}>
        {children}
      </SelectContainer>
    </SelectWrapper>
  )
}
