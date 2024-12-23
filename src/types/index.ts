import { ContactSchema } from '@/features/contacts/pages/ContactForm/schema'
import {
  Tag as TagType,
  Alias as ContactAliasType,
  Contact as ContactType,
  Email as ContactEmailType,
  Number as ContactNumberType,
  Platform as SocialPlatformType,
  Social as ContactSocialType,
  ContactToContact as RelationType,
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

export type Tag = Omit<TagType, 'contactId'>
export type Alias = Omit<ContactAliasType, 'contactId'>
export type Email = Omit<ContactEmailType, 'contactId'>
export type Number = Omit<ContactNumberType, 'contactId'>
export type Platform = Omit<SocialPlatformType, 'contactId'>
export type Social = Omit<ContactSocialType, 'contactId' | 'platformId'> & {
  platform: Platform
}
export type Relation = Pick<RelationType, 'id' | 'label'> & {
  contact: RelationContact
}

export type Contact = Omit<ContactType, 'active' | 'updatedAt'> & {
  aliases: Alias[]
  emails: Email[]
  numbers: Number[]
  socials: Social[]
  tags: Tag[]
  relatesTo: Relation[]
}

type RelationContact = Pick<Contact, 'id' | 'name' | 'lastname'>

export type Filters = {
  search?: string
  year?: number
  favorite?: boolean
}

export enum NotFoundType {
  MAIN,
  CONTACT,
}

export type ContactFormData = Omit<ContactSchema, 'file' | 'tags'> & {
  tags: Tag[]
  removePhoto: boolean
}
