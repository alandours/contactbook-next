import { useFormContext } from "react-hook-form"

import { Gradient } from "@/components/Gradient"
import { ProfilePicture } from "@/components/ProfilePicture"
import { Contact } from "@/types"

import { MainFormData } from "./components/MainFormData"
import { MainFormContainer, PhotoLabel, ImageInput } from "./styles"

type MainFormProps = {
  contact: Contact
  palette: string[]
  setPalette: () => void
}

export const MainForm = ({ contact, palette, setPalette }: MainFormProps) => {
  const { register } = useFormContext()

  return (
    <>
      <Gradient smooth palette={palette} />
      <MainFormContainer>
        <PhotoLabel>
          <ProfilePicture contact={contact} setPalette={setPalette} />
          <ImageInput type="file" {...register("imageInput")} />
        </PhotoLabel>
        <MainFormData />
      </MainFormContainer>
    </>
  )
}
