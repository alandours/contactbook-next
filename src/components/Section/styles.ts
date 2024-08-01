import styled from 'styled-components'

import { responsive } from '@/ui/responsive'

export const SectionContainer = styled.section<{ order: number }>`
  position: relative;
  width: 100%;

  ${({ order }) =>
    order &&
    `
    order: ${order};
  `}
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow-x: scroll;
  padding: 1rem;

  ${responsive.md(`
    padding: 2rem;
  `)}
`
