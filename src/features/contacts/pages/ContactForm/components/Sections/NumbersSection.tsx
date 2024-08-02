import { useEffect, useMemo } from 'react'
import { useFieldArray } from 'react-hook-form'
import { NumberType } from '@prisma/client'

import { Section } from '@/components/Section'
import { Icons } from '@/ui/icons'

import { MultiField } from './fields/MultiField'
import { AddNewButton, Fields } from './styles'

export const NumbersSection = () => {
  const { fields, append, replace, remove } = useFieldArray({ name: 'numbers' })

  const newField = useMemo(
    () => ({
      number: null,
      type: NumberType.Mobile,
      label: null,
    }),
    []
  )

  useEffect(() => {
    if (!fields.length) {
      replace(newField)
    }
  }, [fields, newField, replace])

  return (
    <Section title="Phone numbers" icon={Icons.phone} sticky>
      <Fields>
        {!!fields.length &&
          fields.map((number: Record<'id', string>, index: number) => (
            <MultiField
              key={number.id}
              label={{ input: 'Phone number', select: 'Type' }}
              names={{
                input: `numbers[${index}].number`,
                select: `numbers[${index}].type`,
                custom: `numbers[${index}].label`,
              }}
              options={Object.keys(NumberType).map((key) => ({
                label: key,
                value: key,
              }))}
              customType={NumberType.Custom}
              removeField={() => remove(index)}
            />
          ))}
      </Fields>
      <AddNewButton handleClick={() => append(newField, { shouldFocus: true })}>
        Add a new number
      </AddNewButton>
    </Section>
  )
}
