import { useEffect, useMemo, useState } from 'react'
import { useFieldArray } from 'react-hook-form'

import { getPlatforms } from '@/actions/actions'
import { Section } from '@/components/Section'
import { Platform } from '@/types'
import { Icons } from '@/ui/icons'

import { AddNewButton } from './fields/AddNewButton'
import { MultiField } from './fields/MultiField'

import { Fields } from './styles'

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
              label={{ input: 'Username', select: 'Platform' }}
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
              isLastField={fields.length === 1}
            />
          ))}
      </Fields>
      <AddNewButton handleClick={() => append(newField, { shouldFocus: true })}>
        New account
      </AddNewButton>
    </Section>
  )
}
