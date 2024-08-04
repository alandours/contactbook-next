import styled from 'styled-components'

import { Checkbox } from '@/ui'
import { responsive } from '@/ui/responsive'

export const ContactFormHeaderContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1.5rem 0.5rem;
  width: 100%;
  z-index: 1000;

  ${responsive.lg(`
    flex-direction: row;
    padding: 1.5rem;
  `)}
`

export const PhotoSection = styled.div`
  position: relative;
`

export const RemovePhotoCheckbox = styled(Checkbox)`
  margin-top: 0.5rem;
`
