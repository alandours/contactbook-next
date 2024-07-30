import { z } from "zod"

import { EmailType, NumberType } from "@prisma/client"

export const schema = z.object({
  id: z.string().optional(),
  name: z.string().trim().max(40, "The name is too long"),
  lastname: z.string().max(40, "The last name is too long").nullable(),
  birthday: z.coerce
    .date({ invalid_type_error: "This is not a valid date" })
    .max(new Date(), "The birthday can't be in the future")
    .nullable(),
  address: z.string().max(40, "The address is too long").nullable(),
  yearMet: z.coerce
    .number()
    .int()
    .max(new Date().getFullYear(), "The year can't be in the future")
    .transform((year) => (year < 1900 ? null : year))
    .nullable(),
  aliases: z.array(
    z.object({
      alias: z.string().max(50, "The alias is too long").nullable(),
    })
  ),
  numbers: z.array(
    z.object({
      number: z.string().max(20, "The number is too long").nullable(),
      type: z.nativeEnum(NumberType),
      label: z.string().max(50, "The label is too long").nullable(),
    })
  ),
  emails: z.array(
    z.object({
      email: z.string().email().max(80, "The email is too long").nullable(),
      type: z.nativeEnum(EmailType),
      label: z.string().max(50, "The label is too long").nullable(),
    })
  ),
  socials: z.array(
    z.object({
      username: z.string().max(80, "The username is too long").nullable(),
      platformId: z.string(),
      label: z.string().max(50, "The label is too long").nullable(),
    })
  ),
  notes: z.string().max(2000, "The notes are too long").nullable(),
  file: z
    .custom<FileList>()
    .transform((file) => (file.length > 0 ? file.item(0) : null))
    .refine((file) => !file || file?.type.startsWith("image"), {
      message: "Only images can be uploaded",
    })
    .nullable(),
})
