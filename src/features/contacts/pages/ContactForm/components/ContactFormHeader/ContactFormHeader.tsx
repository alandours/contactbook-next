import { useContext } from 'react'
import { Controller, useFormContext } from 'react-hook-form'

import { ProfilePicture } from '@/components/ProfilePicture'
import { ContactsContext } from '@/features/contacts/context'
import { Gradient, ImageDropzone } from '@/ui'

import { ContactMainForm } from '../ContactMainForm'

import {
  ContactFormHeaderContainer,
  PhotoLabel,
  RemovePhotoCheckbox,
} from './styles'

export const ContactFormHeader = () => {
  const { selectedContact } = useContext(ContactsContext)
  const { control } = useFormContext()

  return (
    <>
      <Gradient smooth />
      <ContactFormHeaderContainer>
        <PhotoLabel>
          <Controller
            name="file"
            control={control}
            defaultValue={[]}
            render={({ field: { onChange } }) => (
              <ImageDropzone
                onDrop={(acceptedFiles) => {
                  console.log(acceptedFiles)
                  if (acceptedFiles.length > 0) {
                    onChange([acceptedFiles[0]])
                  }
                }}
              >
                <ProfilePicture contact={selectedContact} />
              </ImageDropzone>
            )}
          />
          <RemovePhotoCheckbox name="removePhoto" label="Delete photo" />
        </PhotoLabel>
        <ContactMainForm />
      </ContactFormHeaderContainer>
    </>
  )
}
