import styled from 'styled-components'

import { FontSize } from '@/ui/typography'

export const CheckboxContainer = styled.label`
  align-items: center;
  display: flex;
  gap: 0.25rem;
  justify-content: center;
`

export const CheckboxText = styled.span`
  color: ${({ theme }) => theme.selected.contrast[1]};
  font-size: ${FontSize.SMALL};
`

export const OriginalCheckbox = styled.input`
  display: none;
`
