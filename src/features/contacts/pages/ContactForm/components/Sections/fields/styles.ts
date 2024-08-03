import styled, { css } from 'styled-components'

import { XButton } from '@/components/XButton'
import { Button } from '@/ui'
import { responsive } from '@/ui/responsive'

export const RemoveButton = styled(XButton)`
  padding: 0.25rem;
  position: absolute;
  right: 0;
  top: -1.25rem;

  ${responsive.md(`
    right: -2rem;
    top: 1rem;
  `)}
`

export const FormField = styled.div<{ $labelMargin?: boolean }>`
  ${({ $labelMargin }) => css`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: space-between;
    margin-top: ${!!$labelMargin ? '1rem' : '0'};
    position: relative;

    ${responsive.md(`
    flex-direction: row;
    gap: 1.2rem;
  `)}
  `}
`

export const AddNewButtonContainer = styled(Button)`
  align-self: flex-end;
`
