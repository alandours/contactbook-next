import { z } from 'zod'

import { EmailType, NumberType } from '@prisma/client'

export type ContactSchema = z.output<typeof schema>

const emptyToNull = (str: string) => str.trim() || null

export const schema = z.object({
  id: z.string().optional(),
  name: z
    .string()
    .trim()
    .min(1, "The name can't be empty")
    .max(40, 'The name is too long'),
  lastname: z
    .string()
    .max(40, 'The last name is too long')
    .transform(emptyToNull)
    .nullish(),
  birthday: z.union([
    z
      .string()
      .refine((birthday) => !birthday, {
        message: 'This is not a valid birthday',
      })
      .transform(emptyToNull)
      .nullable(),
    z.coerce
      .date({ invalid_type_error: 'This is not a valid birthday' })
      .max(new Date(), "The birthday can't be in the future"),
  ]),
  address: z
    .string()
    .max(40, 'The address is too long')
    .transform(emptyToNull)
    .nullable(),
  yearMet: z.union([
    z.coerce
      .number({ message: 'This is not a valid year' })
      .int({ message: 'This is not a valid year' })
      .min(1900, "The year can't be before 1900")
      .max(new Date().getFullYear(), "The year can't be in the future"),
    z
      .string({ message: 'This is not a valid year' })
      .refine((year) => !year, { message: 'This is not a valid year' })
      .transform(emptyToNull)
      .nullable(),
  ]),
  aliases: z.array(
    z.object({
      id: z.string().optional(),
      alias: z.string().max(50, 'The alias is too long').nullable(),
    })
  ),
  numbers: z.array(
    z.object({
      id: z.string().optional(),
      number: z.string().max(20, 'The phone number is too long').nullable(),
      type: z.nativeEnum(NumberType),
      label: z.string().max(50, 'The label is too long').nullable(),
    })
  ),
  emails: z.array(
    z.object({
      id: z.string().optional(),
      email: z.union([
        z
          .string()
          .email()
          .max(80, 'The e-mail is too long')
          .transform(emptyToNull)
          .nullable(),
        z.string().max(0).nullable(),
      ]),
      type: z.nativeEnum(EmailType),
      label: z.string().max(50, 'The label is too long').nullable(),
    })
  ),
  socials: z.array(
    z.object({
      id: z.string().optional(),
      username: z.string().max(80, 'The username is too long').nullable(),
      platformId: z.string(),
      label: z.string().max(50, 'The label is too long').nullable(),
    })
  ),
  tags: z
    .array(
      z.object({
        value: z.string(),
        label: z.string().max(40, 'The tag is too long'),
      })
    )
    .optional(),
  notes: z
    .string()
    .max(2000, 'The notes are too long')
    .transform(emptyToNull)
    .nullable(),
  file: z
    .custom<FileList>()
    .transform((file) => (file.length > 0 ? file[0] : null))
    .refine((file) => !file || file?.type.startsWith('image'), {
      message: 'This is not a valid image',
    })
    .nullable(),
  removePhoto: z.boolean(),
})
