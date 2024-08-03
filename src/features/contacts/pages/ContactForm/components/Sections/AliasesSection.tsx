import { useEffect, useMemo } from 'react'
import { useFieldArray } from 'react-hook-form'

import { Section } from '@/components/Section'
import { Icons } from '@/ui/icons'

import { AddNewButton } from './fields/AddNewButton'
import { SingleField } from './fields/SingleField'

import { Fields } from './styles'

export const AliasesSection = () => {
  const { fields, append, replace, remove } = useFieldArray({ name: 'aliases' })

  const newField = useMemo(() => ({ alias: null }), [])

  useEffect(() => {
    if (!fields.length) {
      replace(newField)
    }
  }, [fields, newField, replace])

  return (
    <Section title="Aliases" icon={Icons.alias} sticky>
      <Fields>
        {!!fields.length &&
          fields.map((alias: Record<'id', string>, index: number) => (
            <SingleField
              key={alias.id}
              label="Alias"
              name={`aliases[${index}].alias`}
              removeField={() => remove(index)}
              isLastField={fields.length === 1}
            />
          ))}
      </Fields>
      <AddNewButton handleClick={() => append(newField, { shouldFocus: true })}>
        New alias
      </AddNewButton>
    </Section>
  )
}
