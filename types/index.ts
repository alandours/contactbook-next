import {
  Alias,
  Contact as ContactType,
  Email,
  Number,
  Social,
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

export type Contact = Omit<ContactType, "active" | "updatedAt">

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
  aliases: Alias[]
  emails: Email[]
  numbers: Number[]
  socials: Social[]
}
