"use client"

import React, { useState, useEffect, useRef, useContext, UIEvent } from "react"
import { notFound, useRouter } from "next/navigation"
import { useForm, FormProvider } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"

import { upsertContact, deleteContact } from "@/actions/actions"
import { ROUTES } from "@/constants/routes"
import { StickyBar } from "@/features/contacts/StickyBar"
import { ContactsContext } from "@/features/contacts/context"
import { ButtonVariants, Contact, ContactFormData } from "@/types"
import { Button, Icon, Loader, Toast } from "@/ui"
import { Icons } from "@/ui/icons"
import { UIContext } from "@/ui/context"
import { isMedia } from "@/ui/responsive"

import { ContactFormHeader } from "./components/ContactFormHeader"
import { ContactSecondaryForm } from "./components/ContactSecondaryForm"
import schema from "./schema"

import { ContactFormContainer, FormActions } from "./styles"

interface ContactFormProps {
  contact?: Contact | null
}

export const ContactForm = ({ contact }: ContactFormProps) => {
  const [showStickyBar, setShowStickyBar] = useState(false)

  const { theme } = useContext(UIContext)
  const { selectContact } = useContext(ContactsContext)

  const router = useRouter()

  const formRef = useRef(null)

  const methods = useForm({
    resolver: yupResolver(schema),
  })

  const { handleSubmit, reset } = methods

  useEffect(() => {
    if (contact) {
      selectContact(contact)

      console.log(contact)

      reset({
        ...contact,
        birthday: contact.birthday
          ? contact.birthday.toISOString().split("T")[0]
          : null,
      })
    }
  }, [contact, selectContact, reset])

  const onSubmit = async (data: ContactFormData) => {
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

    if (file?.length) {
      formData.append("file", file[0])
    }

    const updatedContact = await upsertContact(newData, formData)

    router.push(ROUTES.contacts.profile(updatedContact.id))
  }

  const onDelete = async () => {
    await deleteContact(contact?.id as string)
    router.push(ROUTES.contacts.main)
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
        {/* {toast && (toast.type === "error" || toast.type === "warning") && (
          <Toast />
        )} */}
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
