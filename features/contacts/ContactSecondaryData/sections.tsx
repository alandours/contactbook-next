import { EmailType, NumberType } from "@prisma/client"

import { Datafield } from "@/components/Datafield"
import { Icons } from "@/ui/icons"
import { Alias, Email, Number, Social } from "@/types"

import { Notes } from "./styles"

export const CONTACT_SECTIONS = [
  {
    title: "Aliases",
    icon: Icons.alias,
    key: "aliases",
    order: 1,
    urlStart: null,
    render: (aliases: Alias[]) =>
      aliases.map((alias) => {
        const { id, alias: aliasName } = alias || {}
        return <Datafield name={aliasName} key={id + alias} />
      }),
  },
  {
    title: "Phone numbers",
    icon: Icons.phone,
    key: "numbers",
    order: 2,
    urlStart: "tel:",
    render: (numbers: Number[], urlStart: string) =>
      numbers.map((number) => {
        const { id, number: name, type, label: customLabel } = number
        const label =
          customLabel && type === NumberType.Custom ? customLabel : type
        const url = `${urlStart}${name}`

        return <Datafield name={name} label={label} url={url} key={id} />
      }),
  },
  {
    title: "Emails",
    icon: Icons.email,
    key: "emails",
    order: 3,
    urlStart: "mailto:",
    render: (emails: Email[], urlStart: string) =>
      emails.map((email) => {
        const { id, email: name, type, label: customLabel } = email
        const label =
          customLabel && type === EmailType.Custom ? customLabel : type
        const url = `${urlStart}${name}`

        return <Datafield name={name} label={label} url={url} key={id} />
      }),
  },
  {
    title: "Social Networks",
    icon: Icons.social,
    key: "socials",
    order: 4,
    urlStart: "https://",
    render: (socials: Social[]) =>
      socials.map((social) => {
        const {
          id,
          username,
          platform: { prefix, url: platformUrl, name: platformName },
          label: customLabel,
        } = social
        const name = `${prefix || ""}${username}`
        const label = platformName
        const url = `https://${platformUrl}/${username}`

        return <Datafield name={name} label={label} url={url} key={id} />
      }),
  },
  {
    title: "Notes",
    icon: Icons.notes,
    key: "notes",
    order: 5,
    urlStart: null,
    render: (notes: string) => <Notes>{notes}</Notes>,
  },
] as const
