import { useCallback, useEffect, useState } from "react"
import { useFieldArray } from "react-hook-form"
import { Platform } from "@prisma/client"

import { getPlatforms } from "@/actions/actions"
import { Section } from "@/components/Section"
import { Icons } from "@/ui/icons"

import { MultiField } from "./fields/MultiField"
import { AddNewButton } from "./styles"

export const SocialsSection = () => {
  const { fields, append, remove } = useFieldArray({ name: "Social" })

  const [platforms, setPlatforms] = useState<Platform[]>([])

  const fetchPlatforms = async () => {
    setPlatforms(await getPlatforms())
  }

  useEffect(() => {
    fetchPlatforms()
  }, [])

  const addNewSocial = useCallback(
    (shouldFocus = true) =>
      append(
        {
          username: null,
          platformId: platforms[0]?.id,
          label: null,
        },
        { shouldFocus }
      ),
    [append, platforms]
  )

  useEffect(() => {
    if (!fields.length) {
      addNewSocial(false)
    }
  }, [fields, addNewSocial])

  return (
    <Section title="Social networks" icon={Icons.social} sticky>
      {!!platforms &&
        !!fields.length &&
        fields.map((username: Record<"id", string>, index: number) => (
          <MultiField
            key={username.id}
            label="Username"
            names={{
              input: `Social[${index}].username`,
              select: `Social[${index}].platformId`,
              custom: `Social[${index}].label`,
            }}
            options={platforms}
            removeField={() => remove(index)}
          />
        ))}
      <AddNewButton handleClick={addNewSocial}>Add a new social</AddNewButton>
    </Section>
  )
}