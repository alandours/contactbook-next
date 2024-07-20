import styled from "styled-components"

import { Title } from "../Title"
import { Subtitle } from "../Subtitle"
import { Icon } from "../Icon"
import { ContactBookLink } from "../ContactBookLink"

export const NotFoundContainer = styled.div``

export const NotFoundTitle = styled(Title)`
  justify-content: center;
`

export const NotFoundSubtitle = styled(Subtitle)`
  text-align: center;
`

export const NotFoundIcon = styled(Icon)`
  margin-right: 0.5rem;
  color: ${({ theme }) => theme.mainColor.main};
`

export const NotFoundLink = styled(ContactBookLink)`
  font-size: inherit;
  padding: 0;
`
