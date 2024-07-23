"use client"

import React, { useState, useEffect, useRef, useContext } from "react"
import { notFound, redirect } from "next/navigation"
import { useForm, FormProvider } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"

import { upsertContact, deleteContact } from "@/actions/actions"
import { StickyBar } from "@/features/contacts/StickyBar"
import { ContactsContext } from "@/features/contacts/context"
import { ButtonVariants } from "@/types"
import { Button, Icon, Loader, Toast } from "@/ui"
import { Icons } from "@/ui/icons"
import { UIContext } from "@/ui/context"
import { isMedia } from "@/ui/responsive"

import { ContactFormHeader } from "./components/ContactFormHeader"
import { ContactSecondaryForm } from "./components/ContactSecondaryForm"
import schema from "./schema"

import { ContactFormContainer, FormActions } from "./styles"

interface ContactFormProps {
  id?: string
}

export const ContactForm = ({ id }: ContactFormProps) => {
  const [showStickyBar, setShowStickyBar] = useState(false)

  const { theme } = useContext(UIContext)
  const { selectedContact, selectContact } = useContext(ContactsContext)

  const formRef = useRef(null)

  const methods = useForm({
    resolver: yupResolver(schema),
  })

  const { handleSubmit, reset, formState } = methods

  useEffect(() => {
    if (id) {
      const contact = selectContact(id)

      if (!contact) {
        notFound()
      }

      reset({
        ...contact,
        birthday: contact.birthday
          ? contact.birthday.toISOString().split("T")[0]
          : null,
      })
    }
  }, [id, selectContact, reset])

  const onSubmit = async (data) => {
    console.log("submit", data)

    const { file, ...contactData } = data

    let newData = {
      ...contactData,
      Alias: data.Alias.filter((field) => !!field.alias),
      Number: data.Number.filter((field) => !!field.number),
      Email: data.Email.filter((field) => !!field.email),
      Social: data.Social.filter((field) => !!field.username),
    }

    const formData = new FormData()
    formData.append("file", file[0])

    const updatedContact = await upsertContact(newData, formData)

    redirect(`/contacts/${updatedContact.id}`)
  }

  const onDelete = async () => {
    await deleteContact(id)
    redirect(`/contacts`)
  }

  const handleScroll = (e) => {
    if (e.target === formRef.current) {
      setShowStickyBar(e.target.scrollTop > 270)
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
        <FormActions $edit={!!selectedContact}>
          {!!selectedContact && (
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
