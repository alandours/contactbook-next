import { Contact as ContactType } from "@prisma/client"

export enum ButtonVariants {
  MAIN,
  SECONDARY,
  MAIN_ROUND,
  DATAFIELD,
  LINK,
  DANGER,
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
