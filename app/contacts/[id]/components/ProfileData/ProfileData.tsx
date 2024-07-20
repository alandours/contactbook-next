import { useContext } from "react"
import { Title } from "@/components/Title"
import { FavoriteButton } from "@/components/FavoriteButton"
import { Icon } from "@/components/Icon"
import { ContactsContext } from "@/context/contacts"
import { getBirthdayText, calculateAge } from "@/utils/date"
import { Icons } from "@/utils/icons"

import { ProfileDataContainer, MainDatafield, Name, Link, Text } from "./styles"

export const ProfileData = () => {
  const { selectedContact } = useContext(ContactsContext)

  const { id, name, lastname, birthday, address, yearMet, favorite } =
    selectedContact || {}
  return (
    <ProfileDataContainer>
      <MainDatafield>
        <Title>
          <Name birthday={calculateAge(birthday)}>
            {name} {lastname}
          </Name>
          <FavoriteButton isFavorite={!!favorite} id={id} />
        </Title>
      </MainDatafield>
      {birthday && (
        <MainDatafield>
          <Icon name={Icons.cake} />
          <Text>{getBirthdayText(birthday)}</Text>
        </MainDatafield>
      )}
      {address && (
        <MainDatafield>
          <Icon name={Icons.home} size="1.125rem" />
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
          <Icon name={Icons.calendar} size="1.125rem" />
          <Text>{yearMet}</Text>
        </MainDatafield>
      )}
    </ProfileDataContainer>
  )
}
