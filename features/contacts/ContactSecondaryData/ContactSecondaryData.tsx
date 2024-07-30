import { useContext } from "react"

import { Section } from "@/components/Section"
import { ContactsContext } from "@/features/contacts/context"

import { CONTACT_SECTIONS, SectionRenderData } from "./sections"
import { ContactSecondaryDataContainer } from "./styles"

export const ContactSecondaryData = () => {
  const { selectedContact } = useContext(ContactsContext)

  return (
    selectedContact && (
      <ContactSecondaryDataContainer>
        {CONTACT_SECTIONS.map((section) => {
          const { title, icon, key, order, urlStart, render } = section
          const data = selectedContact[key] as SectionRenderData

          return (
            !!data?.length && (
              <Section icon={icon} key={key} order={order} sticky title={title}>
                {render(data)}
              </Section>
            )
          )
        })}
      </ContactSecondaryDataContainer>
    )
  )
}
