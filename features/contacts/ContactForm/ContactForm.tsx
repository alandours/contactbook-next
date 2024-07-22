"use client"

import React, { useState, useEffect, useRef, useContext } from "react"
import { useForm, FormProvider } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"

import { upsertContact, deleteContact } from "@/actions/actions"
import { StickyBar } from "@/features/contacts"
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
      reset({
        ...contact,
        birthday: contact.birthday
          ? contact.birthday.toISOString().split("T")[0]
          : null,
      })
    }
  }, [id, selectContact, reset])

  const onSubmit = (data) => {
    console.log("submit", data)

    const newData = {
      ...data,
      Alias: data.Alias.filter((field) => !!field.alias),
      Number: data.Number.filter((field) => !!field.number),
      Email: data.Email.filter((field) => !!field.email),
      Social: data.Social.filter((field) => !!field.username),
    }

    // Add photo before submit
    upsertContact(newData)
  }

  const onDelete = () => {
    deleteContact(id)
  }

  const handleScroll = (e) => {
    if (e.target === formRef.current) {
      setShowStickyBar(e.target.scrollTop > 180)
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
        {/* {message &&
          (message.type === "error" || message.type === "warning") && <Toast />} */}
        <ContactFormHeader />
        <ContactSecondaryForm />
        <FormActions edit={!!selectedContact}>
          {!!selectedContact && (
            <Button
              type="button"
              handleClick={onDelete}
              variant={ButtonVariants.DANGER}
            >
              <Icon name={Icons.delete} color={theme.selected.main[1]} />
              Delete contact
            </Button>
          )}
          <Button type="submit">Save contact</Button>
        </FormActions>
      </ContactFormContainer>
    </FormProvider>
  )
}
