import { useEffect, useMemo } from 'react'
import { useFieldArray } from 'react-hook-form'

import { Section } from '@/components/Section'
import { Icons } from '@/ui/icons'

import { SingleField } from './fields/SingleField'
import { AddNewButton } from './styles'

export const AliasesSection = () => {
  const { fields, append, replace, remove } = useFieldArray({ name: 'aliases' })

  const newField = useMemo(() => ({ alias: '' }), [])

  useEffect(() => {
    if (!fields.length) {
      replace(newField)
    }
  }, [fields, newField, replace])

  return (
    <Section title="Aliases" icon={Icons.alias} sticky>
      {!!fields.length &&
        fields.map((alias: Record<'id', string>, index: number) => (
          <SingleField
            key={alias.id}
            label="Alias"
            name={`aliases[${index}].alias`}
            removeField={() => remove(index)}
          />
        ))}
      <AddNewButton handleClick={() => append(newField, { shouldFocus: true })}>
        Add a new alias
      </AddNewButton>
    </Section>
  )
}