import React from "react"

import { Icon } from "@/components/Icon"
import { ProfilePicture } from "@/components/ProfilePicture"
import { ContactWithNextBirthday } from "@/types/birthday"
import {
  calculateAge,
  calculateNextBirthdayAge,
  getListDate,
  isBirthdayFromToday,
  getNamedDate,
  getNextBirthday,
} from "@/utils/date"

import {
  ContactLinkContainer,
  Name,
  NamedDate,
  Date,
  Age,
  FavoriteIcon,
} from "./styles"

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
    <ContactLinkContainer
      href={`/contacts/${id}`}
      // onClick={() => sidebarOpen && dispatch(toggleContactList())}
    >
      {!!nextBirthday && <Date>{getListDate(nextBirthday, showMonth)}</Date>}
      {showPhoto && <ProfilePicture thumbnail />}
      <Name>
        {name} {lastname}
      </Name>
      {showAge && !!age && <Age>{age}</Age>}
      {namedDate && <NamedDate>{namedDate}</NamedDate>}
      {!!favorite && !!showFavoriteIcon && (
        <FavoriteIcon>
          <Icon icon={["fas", "heart"]} color={["mainColor", "main"]} />
        </FavoriteIcon>
      )}
    </ContactLinkContainer>
  )
}
