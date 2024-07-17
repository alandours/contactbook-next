import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'

import { ProfilePicture } from '@/components/ProfilePicture'
import { ContactsContext } from '@/features/contacts/context'
import { Gradient } from '@/ui'

import { ContactMainForm } from '../ContactMainForm'

import {
  ContactFormHeaderContainer,
  ImageInput,
  PhotoLabel,
  RemovePhotoCheckbox,
} from './styles'

export const ContactFormHeader = () => {
  const { selectedContact } = useContext(ContactsContext)
  const { register } = useFormContext()

  return (
    <>
      <Gradient smooth />
      <ContactFormHeaderContainer>
        <PhotoLabel>
          <ProfilePicture contact={selectedContact} />
          <ImageInput type="file" {...register('file')} />
          <RemovePhotoCheckbox name="removePhoto" label="Delete photo" />
        </PhotoLabel>
        <ContactMainForm />
      </ContactFormHeaderContainer>
    </>
  )
}
