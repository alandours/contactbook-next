import styled from 'styled-components'

import { FontWeight } from '@/ui/typography'
import { responsive } from '@/ui/responsive'

export const DatafieldContainer = styled.div`
  border-radius: 2px;
  color: ${({ theme }) => theme.selected.contrast[1]};
  position: relative;
`

export const Text = styled.p`
  padding: 0.5rem 0.75rem;
  text-align: left;
`

export const DataContainer = styled.a`
  display: flex;
  flex-direction: column;

  ${responsive.md(`
    flex-direction: row;
  `)}
`

export const Name = styled.div`
  color: ${({ theme }) => theme.mainColor.dark};
  font-weight: ${FontWeight.REGULAR};
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  white-space: nowrap;

  ${responsive.md(`
    width: 50%;
  `)}
`

export const Label = styled.div`
  color: ${({ theme }) => theme.selected.contrast[3]};
  word-wrap: break-word;
  white-space: nowrap;

  ${responsive.md(`
    width: 50%;
  `)}
`
