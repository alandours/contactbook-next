import styled, { css } from 'styled-components'

import { responsive } from '@/ui/responsive'

export const FooterContainer = styled.footer`
  ${({ theme }) => css`
    background: ${theme.selected.main[2]};
    color: ${theme.selected.contrast[1]};
    display: flex;
    justify-content: center;
    padding: 1rem 1.5rem;
    transition: all 420ms ease;
    transition-property: background, box-shadow, color;

    ${responsive.md(`
      background: ${theme.selected.main[1]};
      box-shadow: 0 2px 6px 0 ${theme.selected.main.shadow};
      justify-content: space-between;
    `)};
  `}
`
