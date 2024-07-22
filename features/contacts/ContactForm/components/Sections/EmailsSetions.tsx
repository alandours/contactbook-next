import { useCallback, useEffect } from "react"
import { useFieldArray } from "react-hook-form"
import { EmailType } from "@prisma/client"

import { Section } from "@/components/Section"
import { Icons } from "@/ui/icons"

import { MultiField } from "./fields/MultiField"
import { AddNewButton } from "./styles"

export const EmailsSection = () => {
  const { fields, append, remove } = useFieldArray({ name: "Email" })

  const addNewEmail = useCallback(
    (shouldFocus = true) =>
      append(
        {
          email: null,
          type: EmailType.Personal,
          label: null,
        },
        { shouldFocus }
      ),
    [append]
  )

  useEffect(() => {
    if (!fields.length) {
      addNewEmail(false)
    }
  }, [fields, addNewEmail])

  return (
    <Section title="E-mails" icon={Icons.email} sticky>
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
            customType={EmailType.Custom}
            removeField={() => remove(index)}
          />
        ))}
      <AddNewButton handleClick={addNewEmail}>Add a new alias</AddNewButton>
    </Section>
  )
}
