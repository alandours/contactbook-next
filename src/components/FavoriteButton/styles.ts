import styled from 'styled-components'

import { FontSize } from '@/ui/typography'
import { responsive } from '@/ui/responsive'

export const FavoriteButtonContainer = styled.button`
  align-self: center;
  background: none;
  border: 0;
  cursor: pointer;
  font-size: ${FontSize.XXL};
  left: 1.25rem;
  margin-top: 3px;
  padding: 0.25rem;
  position: absolute;
  top: 0.75rem;

  ${responsive.xs(`
    font-size: ${FontSize.LARGE};
    left: 0;
    margin-right: 1rem;
    position: initial;
    top: 0;
  `)}
`
