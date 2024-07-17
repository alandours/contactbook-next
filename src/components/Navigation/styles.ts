import styled from 'styled-components'

import { responsive } from '@/ui/responsive'
import { FontSize, FontWeight } from '@/ui/typography'

export const NavigationContainer = styled.div`
  align-items: center;
  display: flex;
`

export const HeaderLinkText = styled.span`
  display: none;
  font-size: ${FontSize.TEXT};
  font-weight: ${FontWeight.REGULAR};
  margin-left: 0.5rem;

  ${responsive.md(`
    display: block;
  `)}
`
