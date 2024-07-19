import { useContext } from 'react'

import { ProfilePicture } from '@/components/ProfilePicture'
import {
  calculateAge,
  calculateNextBirthdayAge,
  getFormattedDaysToNextBirthday,
  getListDate,
  isBirthdayFromToday,
} from '@/features/birthdays/utils'
import { UIContext } from '@/ui/context'
import { Icon, Link } from '@/ui'
import { Icons } from '@/ui/icons'

import { Name, NamedDate, Date, Age } from './styles'
import { ButtonVariants, Contact } from '@/types'

interface ContactLinkProps {
  contact: Contact & { nextBirthday?: Date }
  showPhoto?: boolean
  showAge?: boolean
  showMonth?: boolean
}

export const ContactLink = ({
  contact,
  showPhoto = false,
  showAge = false,
  showMonth = false,
}: ContactLinkProps) => {
  const { theme, settings, menuOpen, toggleMenu } = useContext(UIContext)

  const { id, name, lastname, birthday, nextBirthday, favorite } = contact || {}
  const age =
    birthday && nextBirthday && !isBirthdayFromToday(birthday)
      ? calculateNextBirthdayAge(birthday)
      : calculateAge(birthday)
  const daysToNextBirthday =
    !!nextBirthday && getFormattedDaysToNextBirthday(nextBirthday)

  return (
    <Link
      href={`/contacts/${id}`}
      variant={ButtonVariants.DATAFIELD}
      onClick={() => menuOpen && toggleMenu()}
    >
      {!!nextBirthday && <Date>{getListDate(nextBirthday, showMonth)}</Date>}
      {showPhoto && <ProfilePicture contact={contact} thumbnail />}
      <Name>
        {name} {lastname}
      </Name>
      {showAge && !!age && <Age>{age}</Age>}
      {daysToNextBirthday && <NamedDate>{daysToNextBirthday}</NamedDate>}
      {!!favorite && settings.showFavoriteIcon && (
        <Icon
          name={Icons.heartFull}
          color={theme.mainColor.main}
          size="0.75rem"
        />
      )}
    </Link>
  )
}
