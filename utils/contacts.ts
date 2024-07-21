import { Colors } from "@/ui/palette"
import { Contact } from "@/types"
import { getRandomInt } from "@/utils"

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
