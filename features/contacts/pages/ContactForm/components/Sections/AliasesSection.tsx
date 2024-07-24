import { useCallback, useEffect } from "react"
import { useFieldArray } from "react-hook-form"

import { Section } from "@/components/Section"
import { Icons } from "@/ui/icons"

import { SingleField } from "./fields/SingleField"
import { AddNewButton } from "./styles"

export const AliasesSection = () => {
  const { fields, append, remove } = useFieldArray({ name: "Alias" })

  const addNewAlias = useCallback(
    (shouldFocus = true) => append({ alias: "" }, { shouldFocus }),
    [append]
  )

  useEffect(() => {
    if (!fields.length) {
      addNewAlias(false)
    }
  }, [fields, addNewAlias])

  return (
    <Section title="Aliases" icon={Icons.alias} sticky>
      {!!fields.length &&
        fields.map((alias: Record<"id", string>, index: number) => (
          <SingleField
            key={alias.id}
            label="Alias"
            name={`Alias[${index}].alias`}
            removeField={() => remove(index)}
          />
        ))}
      <AddNewButton handleClick={addNewAlias}>Add a new alias</AddNewButton>
    </Section>
  )
}
