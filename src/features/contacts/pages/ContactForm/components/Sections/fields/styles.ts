import styled from 'styled-components'

import { XButton } from '@/components/XButton'
import { responsive } from '@/ui/responsive'

export const RemoveButton = styled(XButton)`
  margin-left: 1.5rem;
  transition: all ease 200ms;
  position: absolute;
  right: 0;
  top: -2rem;
  width: 0.625rem;

  ${responsive.md(`
    margin-left: 0;
    opacity: 0;
    position: absolute;
    right: -1.25rem;
    top: 0.125rem;
    visibility: hidden;
  `)}
`

export const FormField = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: space-between;
  position: relative;

  ${responsive.md(`
    flex-direction: row;
    gap: 1.2rem;
  `)}

  &:hover ${RemoveButton} {
    opacity: 1;
    visibility: visible;
    transition: all ease 100ms;
  }
`
