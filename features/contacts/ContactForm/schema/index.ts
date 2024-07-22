import * as yup from "yup"

const emptyStringToNull = (currentValue: string, originalValue: string) =>
  !originalValue ? null : currentValue

const schema = yup.object().shape({
  name: yup
    .string()
    .required("The name is required")
    .max(40, "The name can't be longer than 40 characters"),
  lastname: yup
    .string()
    .max(40, "The last name can't be longer than 40 characters"),
  birthday: yup
    .date()
    .typeError("It should be a valid date")
    .max(new Date(), "The birthday can't be in the future")
    .transform(emptyStringToNull)
    .nullable(),
  address: yup
    .string()
    .max(40, "The address can't be longer than 40 characters"),
  yearMet: yup
    .number()
    .typeError("It should be a valid year")
    .min(1900, "The year can't be before 1900")
    .max(new Date().getFullYear(), "The year can't be in the future")
    .transform(emptyStringToNull)
    .nullable(),
  aliases: yup.array().of(
    yup.object().shape({
      alias: yup
        .string()
        .max(50, "The alias can't be longer than 50 characters"),
    })
  ),
  numbers: yup.array().of(
    yup.object().shape({
      number: yup
        .string()
        .max(50, "The phone number can't be longer than 50 characters"),
      id_type: yup.number(),
      custom_label: yup
        .string()
        .max(50, "The label can't be longer than 50 characters"),
    })
  ),
  emails: yup.array().of(
    yup.object().shape({
      email: yup
        .string()
        .max(80, "The email can't be longer than 50 characters"),
      id_type: yup.number(),
      custom_label: yup
        .string()
        .max(50, "The label can't be longer than 50 characters"),
    })
  ),
  social: yup.array().of(
    yup.object().shape({
      username: yup
        .string()
        .max(80, "The username can't be longer than 50 characters"),
      id_network: yup.number(),
      custom_label: yup
        .string()
        .max(50, "The label can't be longer than 50 characters"),
    })
  ),
  notes: yup
    .string()
    .max(2000, "The notes can't be longer than 2000 characters"),
})

export default schema
