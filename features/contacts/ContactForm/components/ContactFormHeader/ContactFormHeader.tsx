import { useFormContext } from "react-hook-form"

import { ProfilePicture } from "@/components/ProfilePicture"
import { Gradient } from "@/ui"

import { ContactMainForm } from "../ContactMainForm"

import {
  ContactFormHeaderContainer,
  ImageInput,
  PhotoLabel,
  RemovePhotoCheckbox,
} from "./styles"

export const ContactFormHeader = () => {
  const { register } = useFormContext()

  return (
    <>
      <Gradient smooth />
      <ContactFormHeaderContainer>
        <PhotoLabel>
          <ProfilePicture />
          <ImageInput type="file" {...register("photo")} />
          <RemovePhotoCheckbox name="removePhoto" label="Delete photo" />
        </PhotoLabel>
        <ContactMainForm />
      </ContactFormHeaderContainer>
    </>
  )
}
