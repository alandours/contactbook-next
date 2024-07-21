import { useContext } from "react"

import { FavoriteButton } from "@/components/FavoriteButton"
import { getBirthdayText, calculateAge } from "@/features/birthdays/utils"
import { ContactsContext } from "@/features/contacts/context"
import { Icon, Link, Title } from "@/ui"
import { Icons } from "@/ui/icons"

import { ProfileDataContainer, MainDatafield, Name, Text } from "./styles"

export const ProfileData = () => {
  const { selectedContact } = useContext(ContactsContext)

  const { id, name, lastname, birthday, address, yearMet, favorite } =
    selectedContact || {}

  return (
    id && (
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
              external
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
  )
}
