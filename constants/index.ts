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
    icon: "id-card",
    key: "Alias",
    order: 1,
    urlStart: null,
  },
  {
    title: "Phone numbers",
    icon: "phone",
    key: "Number",
    order: 2,
    urlStart: "tel:",
  },
  {
    title: "Emails",
    icon: "envelope",
    key: "Email",
    order: 3,
    urlStart: "mailto:",
  },
  {
    title: "Social Networks",
    icon: "share-alt",
    key: "Social",
    order: 4,
    urlStart: "https://",
  },
  {
    title: "Notes",
    icon: "sticky-note",
    key: "notes",
    order: 5,
    urlStart: null,
  },
] as const
