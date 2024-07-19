import { useContext } from 'react'

import { FavoriteButton } from '@/components/FavoriteButton'
import { calculateAge, formatBirthday } from '@/features/birthdays/utils'
import { ContactsContext } from '@/features/contacts/context'
import { Icon, Link, Title } from '@/ui'
import { Icons } from '@/ui/icons'

import { ContactMainDataContainer, MainDatafield, Name, Text } from './styles'

export const ContactMainData = () => {
  const { selectedContact } = useContext(ContactsContext)

  const { id, name, lastname, birthday, address, yearMet, favorite } =
    selectedContact || {}

  return (
    id && (
      <ContactMainDataContainer>
        <MainDatafield>
          <Title>
            <Name $birthday={calculateAge(birthday)}>
              {name} {lastname}
            </Name>
            <FavoriteButton isFavorite={!!favorite} id={id} />
          </Title>
        </MainDatafield>
        {birthday && (
          <MainDatafield>
            <Icon name={Icons.cake} />
            <Text>{formatBirthday(birthday)}</Text>
          </MainDatafield>
        )}
        {address && (
          <MainDatafield>
            <Icon name={Icons.home} />
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
            <Icon name={Icons.calendar} />
            <Text>{yearMet}</Text>
          </MainDatafield>
        )}
      </ContactMainDataContainer>
    )
  )
}
