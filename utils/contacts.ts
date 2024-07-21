import { Colors } from "@/ui/palette"
import { Contact } from "@/types"
import { getRandomInt } from "@/utils"

export const formatFullName = (name: string, lastname?: string | null) => {
  if (!lastname) {
    return name
  }

  const orderByLastnameFirst = localStorage.getItem("orderByLastnameFirst")
  return orderByLastnameFirst ? `${lastname}, ${name}` : `${name} ${lastname}`
}

export const sortContacts = (contacts: Contact[]) => {
  const orderByLastnameFirst = localStorage.getItem("orderByLastnameFirst")

  if (!orderByLastnameFirst) {
    return contacts
  }

  return contacts.sort((contact1, contact2) => {
    const name1 = contact1.name
    const name2 = contact2.name

    const lastname1 = (contact1.lastname || name1).toLowerCase()
    const lastname2 = (contact2.lastname || name2).toLowerCase()

    const lastnameCompare = lastname1.localeCompare(lastname2)

    if (lastnameCompare === 0) {
      return name1.localeCompare(name2)
    }

    return lastnameCompare
  })
}

export const getInitial = (name: string) => name.toUpperCase()[0]

export const getDefaultPhoto = (mainColor: Colors) =>
  `contact-${mainColor || "green"}.jpg`

export const getRandomContact = (contacts: Contact[]) => {
  const randomIndex = getRandomInt(0, contacts.length - 1)
  const randomContact = contacts[randomIndex]
  return randomContact
}

export const appendParsedData = (formData, data) => {
  Object.keys(data).forEach((key) => {
    const parsedData = data[key] === null ? "" : data[key]
    const value =
      typeof parsedData === "string" ? parsedData : JSON.stringify(parsedData)
    formData.append(`${key}`, value)
  })
}
