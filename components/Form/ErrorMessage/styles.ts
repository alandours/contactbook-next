import styled from "styled-components"

import { FontSize, FontWeight } from "@/theme/typography"

export const ErrorMessageContainer = styled.div`
  color: ${({ theme }) => theme.selected.danger.light};
  font-size: ${FontSize.SMALL};
  font-weight: ${FontWeight.REGULAR};
  margin-top: 4px;
  white-space: nowrap;
`
