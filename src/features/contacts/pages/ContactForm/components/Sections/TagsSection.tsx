'use client'

import { useEffect, useState } from 'react'
import { Controller, useFormContext } from 'react-hook-form'

import { getTags } from '@/actions/actions'
import { Section } from '@/components/Section'
import { Tag } from '@/types'
import { Select } from '@/ui'
import { Icons } from '@/ui/icons'
import { OptionData } from '@/ui/Select'
import { tagsToOptions } from '@/utils/contacts'

import { Fields } from './styles'
import { FormField } from './fields/styles'

export const TagsSection = () => {
  const [tags, setTags] = useState<Tag[]>([])

  const { control } = useFormContext()

  useEffect(() => {
    fetchTags()
  }, [])

  const fetchTags = async () => {
    setTags(await getTags())
  }

  const options = tagsToOptions(tags)

  return (
    <Section title="Tags" icon={Icons.email} sticky>
      <Fields>
        <FormField>
          <Controller
            name="tags"
            control={control}
            render={({ field: { ref, ...field } }) => {
              return (
                <Select<OptionData, true>
                  label="Tagss"
                  options={options}
                  isSearchable
                  isMulti
                  menuPortalTarget={document.querySelector('body')}
                  {...field}
                />
              )
            }}
          />
        </FormField>
      </Fields>
    </Section>
  )
}
