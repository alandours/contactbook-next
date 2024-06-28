"use client"

import { useContext } from "react"

import { PageHeader } from "@/components/PageHeader"
import { Loader } from "@/components/Loader"
import { ContactsContext } from "@/context/contacts"
import { getBirthdayGroups } from "@/utils/date"

import { BirthdaysContainer } from "./styles"

export const Birthdays = () => {
  const { contacts } = useContext(ContactsContext)

  const birthdayGroups = getBirthdayGroups(contacts)
  const { birthdays, quantity } = birthdayGroups || {}
  const subtitle = birthdayGroups ? `${quantity} birthdays` : ""

  return (
    <BirthdaysContainer>
      <PageHeader title="Birthdays" subtitle={subtitle} />
      {!birthdayGroups && <Loader />}
      {!!quantity && birthdays}
    </BirthdaysContainer>
  )
}
