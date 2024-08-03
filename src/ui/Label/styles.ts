import styled, { css } from 'styled-components'
import { FontSize, FontWeight } from '@/ui/typography'
import { responsive } from '@/ui/responsive'

export const LabelContainer = styled.label<{ label?: string }>`
  ${({ theme, label }) => css`
    background: ${theme.selected.main[1]};
    display: flex;
    flex-direction: column;
    margin-top: ${!!label ? '1rem' : '0'};
    padding-top: 0.125rem;
    position: relative;
    min-width: 30%;
    width: 100%;

    ${responsive.md(`
      ${
        label === 'Alias' &&
        css`
          width: 207px;
        `
      }
    `)}
  `}

  & + & {
    ${responsive.md(`
      margin-left: 1rem;
    `)}
  }
`

export const LabelText = styled.span`
  color: ${({ theme }) => theme.selected.contrast[2]};
  font-size: ${FontSize.SMALL};
  font-weight: ${FontWeight.LIGHT};
  left: 0;
  position: absolute;
  top: -1rem;
`
