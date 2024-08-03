import { useEffect, useMemo } from 'react'
import { useFieldArray } from 'react-hook-form'
import { EmailType } from '@prisma/client'

import { Section } from '@/components/Section'
import { Icons } from '@/ui/icons'

import { MultiField } from './fields/MultiField'
import { AddNewButton, Fields } from './styles'

export const EmailsSection = () => {
  const { fields, append, replace, remove } = useFieldArray({ name: 'emails' })

  const newField = useMemo(
    () => ({
      email: null,
      type: EmailType.Personal,
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
    <Section title="E-mails" icon={Icons.email} iconSize="1.125rem" sticky>
      <Fields>
        {!!fields.length &&
          fields.map((email: Record<'id', string>, index: number) => (
            <MultiField
              key={email.id}
              label={{ input: 'E-mail', select: 'Type' }}
              names={{
                input: `emails[${index}].email`,
                select: `emails[${index}].type`,
                custom: `emails[${index}].label`,
              }}
              options={Object.keys(EmailType).map((key) => ({
                label: key,
                value: key,
              }))}
              customType={EmailType.Custom}
              removeField={() => remove(index)}
            />
          ))}
      </Fields>
      <AddNewButton handleClick={() => append(newField, { shouldFocus: true })}>
        Add new e-mail
      </AddNewButton>
    </Section>
  )
}
