import { Contact as ContactType } from "@prisma/client"

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
