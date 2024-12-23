import { useContext } from 'react'
import { Controller, useFormContext } from 'react-hook-form'

import { ProfilePicture } from '@/components/ProfilePicture'
import { ContactsContext } from '@/features/contacts/context'
import { Gradient, ImageDropzone } from '@/ui'

import { ContactMainForm } from '../ContactMainForm'

import {
  ContactFormHeaderContainer,
  PhotoSection,
  RemovePhotoCheckbox,
} from './styles'

export const ContactFormHeader = () => {
  const { selectedContact } = useContext(ContactsContext)
  const { control } = useFormContext()

  return (
    <>
      <Gradient smooth />
      <ContactFormHeaderContainer>
        <PhotoSection>
          <Controller
            name="file"
            control={control}
            defaultValue={[]}
            render={({ field: { onChange } }) => (
              <ImageDropzone
                onDrop={(acceptedFiles) => {
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
        </PhotoSection>
        <ContactMainForm />
      </ContactFormHeaderContainer>
    </>
  )
}
