import { useFormContext } from "react-hook-form"

import { ProfilePicture } from "@/components/ProfilePicture"
import { ContactMainForm } from "@/features/contacts"
import { Gradient } from "@/ui"

import { ContactFormHeaderContainer, PhotoLabel, ImageInput } from "./styles"

export const ContactFormHeader = () => {
  const { register } = useFormContext()

  return (
    <>
      <Gradient smooth />
      <ContactFormHeaderContainer>
        <PhotoLabel>
          <ProfilePicture />
          <ImageInput type="file" {...register("imageInput")} />
        </PhotoLabel>
        <ContactMainForm />
      </ContactFormHeaderContainer>
    </>
  )
}
