import {
  Alias as ContactAliasType,
  Contact as ContactType,
  Email as ContactEmailType,
  Number as ContactNumberType,
  Platform as SocialPlatformType,
  Social as ContactSocialType,
} from "@prisma/client"

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
  SUCCESS,
  ERROR,
  WARNING,
}

export enum ListItemType {
  CONTACT,
  INITIAL,
}

export type Alias = ContactAliasType
export type Email = ContactEmailType
export type Number = ContactNumberType
export type Platform = SocialPlatformType
export type Social = ContactSocialType & {
  platform: Platform
}

export type Contact = Omit<ContactType, "active" | "updatedAt"> & {
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

export type ContactFormData = Omit<
  Contact,
  "favorite" | "photo" | "createdAt"
> & {
  removePhoto: boolean
  file?: File[]
}
