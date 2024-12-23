import { ContactFormData, Status } from '@/types'
import { getFullName } from '@/utils/contacts'

type ContactNames = Pick<ContactFormData, 'name' | 'lastname'> &
  Partial<ContactFormData>

export const MESSAGES = {
  CONTACT_CREATE: {
    [Status.SUCCESS]: ({ name, lastname }: ContactNames) =>
      `${getFullName(name, lastname)} was created`,
    [Status.ERROR]: 'There was an error creating the contact',
  },
  CONTACT_DELETE: {
    [Status.SUCCESS]: ({ name, lastname }: ContactNames) =>
      `${getFullName(name, lastname)} was deleted`,
    [Status.ERROR]: 'There was an error deleting the contact',
  },
  CONTACT_UPDATE: {
    [Status.SUCCESS]: ({ name, lastname }: ContactNames) =>
      `${getFullName(name, lastname)} was updated`,
    [Status.ERROR]: ({ name, lastname }: ContactNames) =>
      `There was an error updating ${getFullName(name, lastname)}`,
  },
  CONTACT_VALIDATION: 'Validation failed',
}
