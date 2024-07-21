import styled from "styled-components"

import { FontSize, FontWeight } from "@/ui/typography"
import { zindex } from "@/constants"

export const FixedInfoContainer = styled.div`
  background: ${({ theme }) => theme.selected.main[1]};
  display: flex;
  min-height: 46px;
  padding: 0.5rem 1rem;
  position: sticky;
  top: 0;
  z-index: ${zindex.fixed};
`

export const Name = styled.p`
  align-items: center;
  color: ${({ theme }) => theme.selected.contrast[1]};
  display: flex;
  font-size: ${FontSize.BASE};
  font-weight: ${FontWeight.BOLD};
`
