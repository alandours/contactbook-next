import { Icons } from "@/ui/icons"

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
