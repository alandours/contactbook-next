import { Contact } from "@/types"
import { getRandomInt } from "@/utils"

export const getInitial = (name: string) => name.toUpperCase()[0]

export const getRandomContact = (contacts: Contact[]) => {
  const randomIndex = getRandomInt(0, contacts.length - 1)
  const randomContact = contacts[randomIndex]
  return randomContact
}
