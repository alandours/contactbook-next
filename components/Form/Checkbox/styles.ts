import styled from "styled-components"
import { FontSize } from "@/theme/typography"

export const CheckboxContainer = styled.label`
  align-items: center;
  display: flex;
  justify-content: center;
`

export const CheckboxText = styled.span`
  color: ${({ theme }) => theme.selected.contrast[1]};
  margin-left: 0.5rem;
  font-size: ${FontSize.SMALL};
`

export const OriginalCheckbox = styled.input`
  display: none;
`
