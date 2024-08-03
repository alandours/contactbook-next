import styled from 'styled-components'

import { responsive } from '@/ui/responsive'

export const Fields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  ${responsive.md(`
    margin-right: 2rem;
    gap: 1rem;
  `)}
`
