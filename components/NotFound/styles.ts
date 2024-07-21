import styled from "styled-components"

import { Icon, Title, Subtitle } from "@/ui"

export const NotFoundContainer = styled.div``

export const NotFoundTitle = styled(Title)`
  gap: 1rem;
  justify-content: center;
`

export const NotFoundSubtitle = styled(Subtitle)`
  text-align: center;
`

export const NotFoundIcon = styled(Icon)`
  margin-right: 0.5rem;
  color: ${({ theme }) => theme.mainColor.main};
`
