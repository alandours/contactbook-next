"use client"

import React, { useState, useEffect, useRef, useContext, UIEvent } from "react"
import { useRouter } from "next/navigation"
import { useForm, FormProvider } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

import { upsertContact, deleteContact } from "@/actions/actions"
import { ROUTES } from "@/constants/routes"
import { StickyBar } from "@/features/contacts/StickyBar"
import { ContactsContext } from "@/features/contacts/context"
import { ButtonVariants, Contact, Status } from "@/types"
import { Button, Icon, Toast } from "@/ui"
import { Icons } from "@/ui/icons"
import { UIContext } from "@/ui/context"
import { isMedia } from "@/ui/responsive"

import { ContactFormHeader } from "./components/ContactFormHeader"
import { ContactSecondaryForm } from "./components/ContactSecondaryForm"

import { schema } from "./schema"

import { ContactFormContainer, FormActions } from "./styles"

interface ContactFormProps {
  contact?: Contact | null
}

export const ContactForm = ({ contact }: ContactFormProps) => {
  const [showStickyBar, setShowStickyBar] = useState(false)

  const { theme, setToast } = useContext(UIContext)
  const { selectContact } = useContext(ContactsContext)

  const router = useRouter()

  const formRef = useRef(null)

  const methods = useForm<z.output<typeof schema>>({
    resolver: zodResolver(schema),
  })

  const { handleSubmit, reset } = methods

  useEffect(() => {
    if (contact) {
      selectContact(contact)

      reset({
        ...contact,
        birthday: contact.birthday
          ? contact.birthday.toISOString().split("T")[0]
          : null,
      })
    }
  }, [contact, selectContact, reset])

  const onSubmit = async (data: z.output<typeof schema>) => {
    console.log("submit", data)

    const { file, ...contactData } = data

    let newData = {
      ...contactData,
      aliases: data.aliases.filter((field) => !!field.alias),
      numbers: data.numbers.filter((field) => !!field.number),
      emails: data.emails.filter((field) => !!field.email),
      socials: data.socials.filter((field) => !!field.username),
    }

    const formData = new FormData()

    if (file) {
      formData.append("file", file)
    }

    const { status, message, contact } = await upsertContact(newData, formData)

    setToast({ message, status })

    if (status === Status.SUCCESS && contact) {
      router.push(ROUTES.contacts.profile(contact.id))
    }
  }

  const onDelete = async () => {
    const { status, message } = await deleteContact(contact?.id as string)

    setToast({ message, status })

    if (status === Status.SUCCESS) {
      router.push(ROUTES.contacts.main)
    }
  }

  const handleScroll = (e: UIEvent<HTMLFormElement>) => {
    if (e.target === formRef.current) {
      setShowStickyBar((e.target as HTMLFormElement).scrollTop > 270)
    }
  }

  return (
    <FormProvider {...methods}>
      <ContactFormContainer
        onSubmit={handleSubmit(onSubmit)}
        onScroll={isMedia("tablet") ? handleScroll : undefined}
        ref={formRef}
      >
        {isMedia("tablet") && showStickyBar && <StickyBar />}
        <Toast />
        <ContactFormHeader />
        <ContactSecondaryForm />
        <FormActions $edit={!!contact}>
          {!!contact && (
            <Button
              type="button"
              handleClick={onDelete}
              variant={ButtonVariants.TERTIARY}
            >
              <Icon
                name={Icons.delete}
                color={theme.selected.contrast[2]}
                size="0.75rem"
              />
              Delete contact
            </Button>
          )}
          <Button type="submit">Save contact</Button>
        </FormActions>
      </ContactFormContainer>
    </FormProvider>
  )
}
