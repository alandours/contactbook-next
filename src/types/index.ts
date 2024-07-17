import { ContactSchema } from '@/features/contacts/pages/ContactForm/schema'
import {
  Alias as ContactAliasType,
  Contact as ContactType,
  Email as ContactEmailType,
  Number as ContactNumberType,
  Platform as SocialPlatformType,
  Social as ContactSocialType,
} from '@prisma/client'

export enum ButtonVariants {
  MAIN,
  SECONDARY,
  TERTIARY,
  MAIN_ROUND,
  DATAFIELD,
  LINK,
  DANGER,
}

export enum InputSizes {
  REGULAR,
  BIG,
}

export enum Status {
  SUCCESS = 'success',
  ERROR = 'error',
  WARNING = 'warning',
}

export enum ListItemType {
  CONTACT,
  INITIAL,
}

export type Alias = Omit<ContactAliasType, 'contactId'>
export type Email = Omit<ContactEmailType, 'contactId'>
export type Number = Omit<ContactNumberType, 'contactId'>
export type Platform = Omit<SocialPlatformType, 'contactId'>
export type Social = Omit<ContactSocialType, 'contactId' | 'platformId'> & {
  platform: Platform
}

export type Contact = Omit<ContactType, 'active' | 'updatedAt'> & {
  aliases: Alias[]
  emails: Email[]
  numbers: Number[]
  socials: Social[]
}

export type Filters = {
  search?: string
  year?: number
  favorite?: boolean
}

export enum NotFoundType {
  MAIN,
  CONTACT,
}

export type ContactFormData = Omit<ContactSchema, 'file'> & {
  removePhoto: boolean
}
