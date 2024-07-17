import styled from 'styled-components'

import { zindex } from '@/ui/constants'
import { FontSize, FontWeight } from '@/ui/typography'

export const StickyBarContainer = styled.div`
  background: ${({ theme }) => theme.selected.main[1]};
  display: flex;
  gap: 0.75rem;
  min-height: 46px;
  padding: 0.5rem 1rem;
  position: sticky;
  top: 0;
  z-index: ${zindex.fixed};
`

export const Name = styled.p`
  align-items: center;
  color: ${({ theme }) => theme.selected.contrast[1]};
  display: flex;
  font-size: ${FontSize.BASE};
  font-weight: ${FontWeight.BOLD};
`
