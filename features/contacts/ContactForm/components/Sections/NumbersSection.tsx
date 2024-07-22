import { useCallback, useEffect } from "react"
import { useFieldArray } from "react-hook-form"
import { NumberType } from "@prisma/client"

import { Section } from "@/components/Section"
import { Icons } from "@/ui/icons"

import { MultiField } from "./fields/MultiField"
import { AddNewButton } from "./styles"

export const NumbersSection = () => {
  const { fields, append, remove } = useFieldArray({ name: "Number" })

  const addNewNumber = useCallback(
    (shouldFocus = true) =>
      append(
        {
          number: null,
          type: NumberType.Mobile,
          label: null,
        },
        { shouldFocus }
      ),
    [append]
  )

  useEffect(() => {
    if (!fields.length) {
      addNewNumber(false)
    }
  }, [fields, addNewNumber])

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
              custom: `Number[${index}].label`,
            }}
            options={Object.keys(NumberType)}
            customType={NumberType.Custom}
            removeField={() => remove(index)}
          />
        ))}
      <AddNewButton handleClick={addNewNumber}>Add a new number</AddNewButton>
    </Section>
  )
}
