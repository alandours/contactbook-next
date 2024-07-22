import { useContext } from "react"
import { useFieldArray } from "react-hook-form"
import { EmailType } from "@prisma/client"

import { Section } from "@/components/Section"
import { ContactsContext } from "@/features/contacts/context"
import { Icons } from "@/ui/icons"

import { MultiField } from "./fields/MultiField"
import { AddNewButton } from "./styles"

export const EmailsSection = () => {
  const { selectedContact } = useContext(ContactsContext)
  const { fields, append, remove } = useFieldArray({ name: "Email" })

  const addNewEmail = () => null

  return (
    <Section title="Phone numbers" icon={Icons.phone} sticky>
      {!!fields.length &&
        fields.map((email: Record<"id", string>, index: number) => (
          <MultiField
            key={email.id}
            label="E-mail"
            names={{
              input: `Email[${index}].email`,
              select: `Email[${index}].type`,
              custom: `Email[${index}].custom_label`,
            }}
            options={Object.keys(EmailType)}
            removeField={() => remove(index)}
          />
        ))}
      <AddNewButton handleClick={addNewEmail}>Add a new alias</AddNewButton>
    </Section>
  )
}
