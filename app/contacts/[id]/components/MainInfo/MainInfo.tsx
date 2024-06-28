import { Gradient } from "@/components/Gradient"
import { MainProfilePicture } from "@/components/MainProfilePicture"
import { Icon } from "@/components/Icon"
import { Contact, LinkVariants } from "@/types"

import { ProfileData } from "../ProfileData"

import { MainInfoContainer, EditLink } from "./styles"

type MainInfoProps = {
  contact: Contact
}

export const MainInfo = ({ contact }: MainInfoProps) => {
  const { id } = contact || {}

  return (
    <>
      <Gradient smooth />
      <MainInfoContainer>
        <MainProfilePicture contact={contact} />
        <ProfileData contact={contact} />
        <EditLink
          url={`/contacts/${id}/edit`}
          title="Edit contact"
          variant={LinkVariants.ROUND}
        >
          <Icon icon="pen" color={["selected", "main", "1"]} />
        </EditLink>
      </MainInfoContainer>
    </>
  )
}
