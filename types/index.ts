import { Contact as ContactType } from "@prisma/client"

export enum ButtonVariants {
  MAIN,
  TEXT,
  TEXT_DANGER,
}

export enum LinkVariants {
  MAIN,
  ROUND,
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
}
