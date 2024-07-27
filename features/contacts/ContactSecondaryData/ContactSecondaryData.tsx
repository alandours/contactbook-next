import React, { useContext } from "react"
import { Alias, NumberType } from "@prisma/client"

import { Datafield } from "@/components/Datafield"
import { Section } from "@/components/Section"
import { CONTACT_SECTIONS } from "@/features/contacts/constants"
import { ContactsContext } from "@/features/contacts/context"

import { Notes, ContactSecondaryDataContainer } from "./styles"

const getFieldData = (field, urlStart) => {
  const {
    number,
    email,
    username,
    platform,
    type,
    label: customLabel,
  } = field || {}

  const { prefix, url: platformUrl, name: platformName } = platform || {}

  const name = number || email || `${prefix || ""}${username}`

  const label =
    customLabel && (type === NumberType.Custom || type === NumberType.Custom)
      ? customLabel
      : type || platformName

  let url = urlStart

  if (platform) {
    url = `https://${platformUrl || ""}/${username}`
  } else {
    url += number || email
  }

  return { name, label, url }
}

const renderAliases = (aliases: Alias[]) =>
  aliases.map((alias) => {
    const { id, alias: aliasName } = alias || {}

    return <Datafield name={aliasName} key={id + alias} />
  })

const renderMultiFields = (data: Record<string, unknown>[], urlStart: string) =>
  data.map((field) => {
    const { id } = field || {}
    const { name, label, url } = getFieldData(field, urlStart) || {}
    return <Datafield name={name} label={label} url={url} key={id + name} />
  })

const renderSection = (
  key: (typeof CONTACT_SECTIONS)[number]["key"],
  data: Record<string, unknown>[] | string,
  urlStart: string
) => {
  switch (key) {
    case "notes":
      return <Notes>{data as string}</Notes>
    case "aliases":
      return renderAliases(data as Alias[])
    default:
      return renderMultiFields(data as Record<string, unknown>[], urlStart)
  }
}

export const ContactSecondaryData = () => {
  const { selectedContact } = useContext(ContactsContext)

  return (
    selectedContact && (
      <ContactSecondaryDataContainer>
        {CONTACT_SECTIONS.map((section) => {
          const { title, icon, key, order, urlStart } = section
          const data = selectedContact[key]

          return (
            !!data?.length && (
              <Section icon={icon} key={key} order={order} sticky title={title}>
                {renderSection(key, data, urlStart)}
              </Section>
            )
          )
        })}
      </ContactSecondaryDataContainer>
    )
  )
}
