import { useContext } from "react"
import { useFieldArray } from "react-hook-form"
import { NumberType } from "@prisma/client"

import { Section } from "@/components/Section"
import { ContactsContext } from "@/features/contacts/context"
import { Icons } from "@/ui/icons"

import { MultiField } from "./fields/MultiField"
import { AddNewButton } from "./styles"

export const NumbersSection = () => {
  const { selectedContact } = useContext(ContactsContext)
  const { fields, append, remove } = useFieldArray({ name: "Number" })

  const addNewNumber = () => null

  return (
    <Section title="Phone numbers" icon={Icons.phone} sticky>
      {!!fields.length &&
        fields.map((number: Record<"id", string>, index: number) => (
          <MultiField
            key={number.id}
            label="Phone number"
            names={{
              input: `Number[${index}].number`,
              select: `Number[${index}].type`,
              custom: `Number[${index}].custom_label`,
            }}
            options={Object.keys(NumberType)}
            removeField={() => remove(index)}
          />
        ))}
      <AddNewButton handleClick={addNewNumber}>Add a new alias</AddNewButton>
    </Section>
  )
}
