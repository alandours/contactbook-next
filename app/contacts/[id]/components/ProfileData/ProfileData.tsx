import { Title } from "@/components/Title"
import { FavoriteButton } from "@/components/FavoriteButton"
import { Icon } from "@/components/Icon"
import { Contact } from "@/types"
import { getBirthdayText, calculateAge } from "@/utils/date"

import { ProfileDataContainer, MainDatafield, Name, Link, Text } from "./styles"

type ProfileDataProps = {
  contact: Contact
}

export const ProfileData = ({ contact }: ProfileDataProps) => {
  console.log(contact)
  const { id, name, lastname, birthday, address, yearMet, favorite } = contact
  return (
    <ProfileDataContainer>
      <MainDatafield>
        <Title>
          <Name birthday={birthday && calculateAge(birthday)}>
            {name} {lastname}
          </Name>
          <FavoriteButton isFavorite={!!favorite} id={id} />
        </Title>
      </MainDatafield>
      {birthday && (
        <MainDatafield>
          <Icon icon="birthday-cake" inline />
          <Text>{getBirthdayText(birthday)}</Text>
        </MainDatafield>
      )}
      {address && (
        <MainDatafield>
          <Icon icon="home" inline />
          <Link
            href={`https://www.google.com/maps/search/${address}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {address}
          </Link>
        </MainDatafield>
      )}
      {yearMet && (
        <MainDatafield>
          <Icon icon="calendar-check" inline />
          <Text>{yearMet}</Text>
        </MainDatafield>
      )}
    </ProfileDataContainer>
  )
}
