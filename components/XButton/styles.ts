import styled from "styled-components"

import { FontSize } from "@/theme/typography"
import { Button } from "@/components/Button"

export const XButtonContainer = styled(Button)`
  background: none;
  border: 0;
  cursor: pointer;
  font-size: ${FontSize.MEDIUM};
  padding: 0;

  &:hover,
  &:focus {
    background: none;
  }
`
