import { useFormContext } from "react-hook-form"

import { Gradient } from "@/components/Gradient"
import { ProfilePicture } from "@/components/ProfilePicture"
import { Contact } from "@/types"

import { MainFormData } from "./components/MainFormData"
import { MainFormContainer, PhotoLabel, ImageInput } from "./styles"

type MainFormProps = {
  contact: Contact
}

export const MainForm = ({ contact }: MainFormProps) => {
  const { register } = useFormContext()

  return (
    <>
      <Gradient smooth />
      <MainFormContainer>
        <PhotoLabel>
          <ProfilePicture contact={contact} />
          <ImageInput type="file" {...register("imageInput")} />
        </PhotoLabel>
        <MainFormData />
      </MainFormContainer>
    </>
  )
}
