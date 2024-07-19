"use client"

import { Contact } from "@prisma/client"
import { PageHeader } from "@/components/PageHeader"
import { Loader } from "@/components/Loader"
import { getBirthdayGroups } from "@/utils/date"

import { BirthdaysContainer } from "./styles"

type BirthdaysProps = {
  contacts: Contact[]
}

export const Birthdays = ({ contacts }: BirthdaysProps) => {
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
