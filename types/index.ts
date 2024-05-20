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

export type Contact = Omit<ContactType, "active" | "createdAt" | "updatedAt">
