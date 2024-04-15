import styled, { DefaultTheme } from "styled-components"

import { screen } from "@/theme/screen"

export const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.selected.main[2]};
  color: ${({ theme }) => theme.selected.contrast[1]};
  display: flex;
  justify-content: center;
  padding: 1rem 1.5rem;
  transition: all 420ms ease;
  transition-property: background, box-shadow, color;

  ${screen.md`
    background: ${({ theme }: { theme: DefaultTheme }) =>
      theme.selected.main[1]};
    box-shadow: 0 2px 6px 0 ${({ theme }: { theme: DefaultTheme }) =>
      theme.selected.main.shadow};
    justify-content: space-between;
  `}
`
