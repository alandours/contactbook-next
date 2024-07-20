import React from "react"

import { Icon } from "@/components/Icon"
import { ProfilePicture } from "@/components/ProfilePicture"
import { theme } from "@/theme/palette"
import { ContactWithNextBirthday } from "@/types/birthday"
import {
  calculateAge,
  calculateNextBirthdayAge,
  getListDate,
  isBirthdayFromToday,
  getNamedDate,
} from "@/utils/date"
import { Icons } from "@/utils/icons"

import { ContactLinkContainer, Name, NamedDate, Date, Age } from "./styles"

interface ContactLinkProps {
  contact: ContactWithNextBirthday
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
  const { id, name, lastname, birthday, nextBirthday, favorite } = contact || {}
  const showFavoriteIcon = localStorage.getItem("showFavoriteIcon")
  const age =
    birthday && nextBirthday && !isBirthdayFromToday(birthday)
      ? calculateNextBirthdayAge(birthday)
      : calculateAge(birthday)
  const namedDate = !!nextBirthday && getNamedDate(nextBirthday)

  return (
    <ContactLinkContainer href={`/contacts/${id}`}>
      {!!nextBirthday && <Date>{getListDate(nextBirthday, showMonth)}</Date>}
      {showPhoto && <ProfilePicture thumbnail />}
      <Name>
        {name} {lastname}
      </Name>
      {showAge && !!age && <Age>{age}</Age>}
      {namedDate && <NamedDate>{namedDate}</NamedDate>}
      {!!favorite && !!showFavoriteIcon && (
        <Icon
          name={Icons.heartFull}
          color={theme.mainColor.main}
          size="0.75rem"
        />
      )}
    </ContactLinkContainer>
  )
}
