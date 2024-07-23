export const ROUTES = {
  birthdays: "/birthdays",
  contacts: {
    main: "/contacts",
    create: `/contacts/create`,
    profile: (id: string) => `/contacts/${id}`,
    edit: (id: string) => `/contacts/${id}/edit`,
    year: "/contacts/year",
  },
  settings: "/settings",
  profilePictures: (name: string) => `/images/profile/`,
}
