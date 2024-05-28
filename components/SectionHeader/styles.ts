import styled from "styled-components"
import { FontSize, FontWeight } from "@/theme/typography"
import { zindex } from "@/constants"
import { screen } from "@/theme/screen"

export const SectionHeaderContainer = styled.h2<{ sticky: boolean }>`
  background: ${({ theme }) => theme.selected.main[3]};
  border-bottom: 2px solid ${({ theme }) => theme.selected.main.shadow};
  color: ${({ theme }) => theme.selected.contrast[1]};
  font-size: ${FontSize.INFO};
  font-weight: ${FontWeight.SEMIBOLD};
  padding: 0.5rem 1.5rem;
  width: 100%;
  transition: all 420ms ease;
  transition-property: background, border, color;
  z-index: ${zindex.tooltip};

  ${({ sticky }) =>
    sticky &&
    screen.md(`
      position: sticky;
      top: 46px;
    `)}
`
