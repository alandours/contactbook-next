import styled from 'styled-components'

import { FontSize, FontWeight } from '@/ui/typography'

export const ErrorMessageContainer = styled.div`
  color: ${({ theme }) => theme.selected.danger.light};
  font-size: 0.625rem;
  font-weight: ${FontWeight.REGULAR};
  margin-top: 0.25rem;
  white-space: nowrap;
`
