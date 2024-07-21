import styled, { css } from "styled-components"
import { FontSize, FontWeight } from "@/ui/typography"
import { zindex } from "@/constants"
import { responsive } from "@/ui/responsive"

export const SectionHeaderContainer = styled.h2<{ sticky: boolean }>`
  ${({ theme, sticky }) => css`
    background: ${theme.selected.main[3]};
    border-bottom: 2px solid ${theme.selected.main.shadow};
    color: ${theme.selected.contrast[1]};
    display: flex;
    font-size: ${FontSize.INFO};
    font-weight: ${FontWeight.SEMIBOLD};
    gap: 0.75rem;
    padding: 0.5rem 1.5rem;
    width: 100%;
    transition: all 420ms ease;
    transition-property: background, border, color;
    z-index: ${zindex.tooltip};

    ${sticky &&
    responsive.md(`
      position: sticky;
      top: 46px;
    `)}
  `}
`
