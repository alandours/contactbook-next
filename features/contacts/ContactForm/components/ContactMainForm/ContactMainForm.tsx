import { Input } from "@/ui/Input"

import { ContactMainFormContainer, FieldContainer } from "./styles"
import { InputSizes } from "@/types"

export const ContactMainForm = () => (
  <ContactMainFormContainer>
    <FieldContainer multiline>
      <Input name="name" label="Name" size={InputSizes.BIG} />
      <Input name="lastname" label="Last name" size={InputSizes.BIG} />
    </FieldContainer>
    <FieldContainer>
      <Input type="date" name="birthday" label="Birthday" />
    </FieldContainer>
    <FieldContainer>
      <Input name="address" label="Address" />
    </FieldContainer>
    <FieldContainer>
      <Input name="yearMet" label="Met in" />
    </FieldContainer>
  </ContactMainFormContainer>
)
