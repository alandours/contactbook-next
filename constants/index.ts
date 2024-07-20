import { Icons } from "@/utils/icons"

export enum zindex {
  back = "-10",
  normal = "1",
  tooltip = "10",
  fixed = "100",
  modal = "1000",
}

export const CONTACT_SECTIONS = [
  {
    title: "Aliases",
    icon: Icons.alias,
    key: "Alias",
    order: 1,
    urlStart: null,
  },
  {
    title: "Phone numbers",
    icon: Icons.phone,
    key: "Number",
    order: 2,
    urlStart: "tel:",
  },
  {
    title: "Emails",
    icon: Icons.email,
    key: "Email",
    order: 3,
    urlStart: "mailto:",
  },
  {
    title: "Social Networks",
    icon: Icons.social,
    key: "Social",
    order: 4,
    urlStart: "https://",
  },
  {
    title: "Notes",
    icon: Icons.notes,
    key: "notes",
    order: 5,
    urlStart: null,
  },
] as const
