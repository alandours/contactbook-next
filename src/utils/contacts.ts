import { MultiValue } from 'react-select'

import { Contact } from '@/types'
import { OptionData } from '@/ui/Select'
import { getRandomInt } from '@/utils'

export const getInitial = (name: string) => name.toUpperCase()[0]

export const getRandomContact = (contacts: Contact[]) => {
  const randomIndex = getRandomInt(0, contacts.length - 1)
  const randomContact = contacts[randomIndex]
  return randomContact
}

export const getFullName = (name: string, lastname?: string | null) =>
  `${name}${lastname ? ` ${lastname}` : ''}`

export const tagsToOptions = (tags: { id: string; name: string }[]) =>
  tags?.map(({ id, name }) => ({
    label: name,
    value: id,
  })) || []

export const optionsToTags = (options: MultiValue<OptionData>) =>
  options?.map(({ label, value }) => ({
    id: value,
    name: label,
  })) || []
