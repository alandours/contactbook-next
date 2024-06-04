import { Gradient } from "@/components/Gradient"
import { MainProfilePicture } from "@/components/MainProfilePicture"
import { Icon } from "@/components/Icon"
import { Contact, LinkVariants } from "@/types"

import { ProfileData } from "../ProfileData"
import { MainInfoContainer, EditLink } from "./styles"

type MainInfoProps = {
  contact: Contact
  palette: string[]
  setPalette: () => void
}

export const MainInfo = ({ contact, palette, setPalette }: MainInfoProps) => {
  const { id } = contact || {}

  return (
    <>
      <Gradient palette={palette} smooth />
      <MainInfoContainer>
        <MainProfilePicture contact={contact} setPalette={setPalette} />
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
