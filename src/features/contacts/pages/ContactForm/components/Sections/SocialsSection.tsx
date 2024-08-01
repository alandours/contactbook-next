import { useEffect, useMemo, useState } from 'react'
import { useFieldArray } from 'react-hook-form'

import { getPlatforms } from '@/actions/actions'
import { Section } from '@/components/Section'
import { Platform } from '@/types'
import { Icons } from '@/ui/icons'

import { MultiField } from './fields/MultiField'
import { AddNewButton, Fields } from './styles'

export const SocialsSection = () => {
  const { fields, append, replace, remove } = useFieldArray({ name: 'socials' })

  const [platforms, setPlatforms] = useState<Platform[]>([])

  const fetchPlatforms = async () => {
    setPlatforms(await getPlatforms())
  }

  useEffect(() => {
    fetchPlatforms()
  }, [])

  const newField = useMemo(
    () => ({
      username: null,
      platformId: platforms[0]?.id,
      label: null,
    }),
    [platforms]
  )

  useEffect(() => {
    if (!fields.length && platforms.length) {
      replace(newField)
    }
  }, [fields, platforms, newField, replace])

  return (
    <Section title="Social networks" icon={Icons.social} sticky>
      <Fields>
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
      </Fields>
      <AddNewButton handleClick={() => append(newField, { shouldFocus: true })}>
        Add a new social
      </AddNewButton>
    </Section>
  )
}
