import React from "react"
import { useFormContext } from "react-hook-form"

import { Input } from "@/components/Form/Input"

import { MainInfoContainer, FieldContainer } from "./styles"

export const MainFormData = () => {
  const { errors } = useFormContext()

  const {
    name = {},
    lastname = {},
    birthday = {},
    address = {},
    met = {},
  } = errors || {}

  return (
    <MainInfoContainer>
      <FieldContainer multiline>
        <Input name="name" placeholder="Name" error={name.message} size="big" />
        <Input
          name="lastname"
          placeholder="Last name"
          error={lastname.message}
          size="big"
        />
      </FieldContainer>
      <FieldContainer>
        <Input
          type="date"
          name="birthday"
          placeholder="Birthday"
          error={birthday.message}
        />
      </FieldContainer>
      <FieldContainer>
        <Input name="address" placeholder="Address" error={address.message} />
      </FieldContainer>
      <FieldContainer>
        <Input name="yearMet" placeholder="Met in" error={met.message} />
      </FieldContainer>
    </MainInfoContainer>
  )
}

export default MainFormData
