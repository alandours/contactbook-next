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

export type Contact = Omit<ContactType, "active" | "updatedAt">
