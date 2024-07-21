import { useFormContext } from "react-hook-form"

import { Gradient } from "@/ui/Gradient"
import { ProfilePicture } from "@/components/ProfilePicture"

import { MainFormData } from "./components/MainFormData"

import { MainFormContainer, PhotoLabel, ImageInput } from "./styles"

export const MainForm = () => {
  const { register } = useFormContext()

  return (
    <>
      <Gradient smooth />
      <MainFormContainer>
        <PhotoLabel>
          <ProfilePicture />
          <ImageInput type="file" {...register("imageInput")} />
        </PhotoLabel>
        <MainFormData />
      </MainFormContainer>
    </>
  )
}
