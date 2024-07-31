import { useCallback, useEffect, useState } from 'react'
import { useFieldArray } from 'react-hook-form'

import { getPlatforms } from '@/actions/actions'
import { Section } from '@/components/Section'
import { Platform } from '@/types'
import { Icons } from '@/ui/icons'

import { MultiField } from './fields/MultiField'
import { AddNewButton } from './styles'

export const SocialsSection = () => {
  const { fields, append, remove } = useFieldArray({ name: 'socials' })

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
        fields.map((username: Record<'id', string>, index: number) => (
          <MultiField
            key={username.id}
            label="Username"
            names={{
              input: `socials[${index}].username`,
              select: `socials[${index}].platformId`,
              custom: `socials[${index}].label`,
            }}
            options={platforms.map(({ id, name }) => ({
              label: name,
              value: id,
            }))}
            removeField={() => remove(index)}
          />
        ))}
      <AddNewButton handleClick={addNewSocial}>Add a new social</AddNewButton>
    </Section>
  )
}
