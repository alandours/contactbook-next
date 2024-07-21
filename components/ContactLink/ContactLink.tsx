import React from "react"

import { Icon, Link } from "@/ui"
import { ProfilePicture } from "@/components/ProfilePicture"
import { theme } from "@/ui/palette"
import { ContactWithNextBirthday } from "@/types/birthday"
import {
  calculateAge,
  calculateNextBirthdayAge,
  getListDate,
  isBirthdayFromToday,
  getNamedDate,
} from "@/utils/date"
import { Icons } from "@/ui/icons"

import { Name, NamedDate, Date, Age } from "./styles"
import { ButtonVariants } from "@/types"

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
    <Link href={`/contacts/${id}`} variant={ButtonVariants.DATAFIELD}>
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
    </Link>
  )
}
