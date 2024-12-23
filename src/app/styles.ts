'use client'

import styled, { css } from 'styled-components'

import { responsive } from '@/ui/responsive'
import { FontSize, FontWeight } from '@/ui/typography'

export const ContactBook = styled.div`
  ${({ theme }) => css`
    background: ${theme.selected.main[2]};
    color: ${theme.selected.contrast[1]};
    display: flex;
    flex-direction: column;
    font-size: ${FontSize.TEXT};
    font-weight: ${FontWeight.REGULAR};
    height: 100%;
  `}
`

export const Main = styled.main`
  display: flex;
  margin-top: 3rem;
  height: auto;
  max-width: 100%;

  ${responsive.md(`
    margin: auto 1rem;
  `)}

  ${responsive.lg(`
    margin: auto;
    width: 1000px;
  `)}
`
