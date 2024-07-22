import { useContext, useEffect, useState } from "react"
import { useFieldArray } from "react-hook-form"

import { Section } from "@/components/Section"
import { ContactsContext } from "@/features/contacts/context"
import { Icons } from "@/ui/icons"

import { MultiField } from "./fields/MultiField"
import { AddNewButton } from "./styles"
import { getPlatforms } from "@/actions/actions"

export const SocialsSection = () => {
  const { selectedContact } = useContext(ContactsContext)
  const { fields, append, remove } = useFieldArray({ name: "Email" })

  const [platforms, setPlatforms] = useState(null)

  const fetchPlatforms = async () => {
    setPlatforms(await getPlatforms())
  }

  useEffect(() => {
    fetchPlatforms()
  }, [])

  const addNewSocial = () => null

  return (
    <Section title="Social networks" icon={Icons.phone} sticky>
      {!!platforms &&
        !!fields.length &&
        fields.map((username: Record<"id", string>, index: number) => (
          <MultiField
            key={username.id}
            label="Username"
            names={{
              input: `Social[${index}].username`,
              select: `Social[${index}].platform`,
              custom: `Social[${index}].custom_label`,
            }}
            options={platforms}
            removeField={() => remove(index)}
          />
        ))}
      <AddNewButton handleClick={addNewSocial}>Add a new alias</AddNewButton>
    </Section>
  )
}
