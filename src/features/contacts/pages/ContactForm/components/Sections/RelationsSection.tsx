import { useContext, useMemo } from 'react'
import { Controller, useFieldArray, useFormContext } from 'react-hook-form'

import { Section } from '@/components/Section'
import { ContactsContext } from '@/features/contacts/context'
import { Input, Select } from '@/ui'
import { Icons } from '@/ui/icons'
import { OptionData } from '@/ui/Select'
import { getFullName } from '@/utils/contacts'

import { AddNewButton } from './fields/AddNewButton'

import { Fields } from './styles'
import { FormField, RemoveButton } from './fields/styles'

export const RelationsSection = () => {
  const { contacts, selectedContact } = useContext(ContactsContext)
  const { fields, append, remove } = useFieldArray({
    name: 'relatesTo',
  })

  const newField = useMemo(
    () => ({
      id: null,
      label: null,
    }),
    []
  )

  const { control } = useFormContext()

  const options = contacts
    .filter((contact) => contact.id !== selectedContact?.id)
    .map(({ id, name, lastname }) => ({
      label: getFullName(name, lastname),
      value: id,
    }))

  return (
    <Section title="Relations" icon={Icons.relation} iconSize="1.125rem" sticky>
      <Fields>
        {!!fields.length &&
          fields.map((_, index: number) => (
            <FormField $labelMargin={false} key={Math.random()}>
              <Controller
                name={`relatesTo[${index}].contact.id`}
                control={control}
                render={({ field: { value, onChange } }) => {
                  return (
                    <Select<OptionData, false>
                      label="Contact"
                      options={options}
                      value={
                        options.find(
                          (option) => option.value === value
                        ) as OptionData
                      }
                      onChange={(selectedOption) => {
                        if (selectedOption && 'value' in selectedOption) {
                          onChange(selectedOption.value)
                        }
                      }}
                      isSearchable
                      menuPortalTarget={document.querySelector('body')}
                    />
                  )
                }}
              />
              <Input name={`relatesTo[${index}].label`} label="Relation" />
              <RemoveButton type="button" handleClick={() => remove(index)} />
            </FormField>
          ))}
      </Fields>
      <AddNewButton handleClick={() => append(newField, { shouldFocus: true })}>
        New relation
      </AddNewButton>
    </Section>
  )
}
