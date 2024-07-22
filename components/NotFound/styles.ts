import styled from "styled-components"

import { Icon, Title, Subtitle, Link } from "@/ui"

export const NotFoundContainer = styled.div``

export const NotFoundTitle = styled(Title)`
  font-size: 1.25rem;
  gap: 0.25rem;
  justify-content: center;
`

export const NotFoundSubtitle = styled(Subtitle)`
  align-items: center;
  font-size: 0.875rem;
  display: flex;
  gap: 0.25rem;
  justify-content: center;
`

export const NotFoundIcon = styled(Icon)`
  margin-right: 0.5rem;
  color: ${({ theme }) => theme.mainColor.main};
`

export const NotFoundLink = styled(Link)`
  font-size: 0.875rem;
`
