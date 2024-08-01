import styled from 'styled-components'

import { Button } from '@/ui'
import { responsive } from '@/ui/responsive'

export const AddNewButton = styled(Button)`
  align-self: flex-end;
`

export const Fields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  ${responsive.md(`
    gap: 1rem;
  `)}
`
