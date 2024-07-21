"use client"

import styled, { css } from "styled-components"

import { responsive } from "@/ui/responsive"

export const ContactBook = styled.div`
  ${({ theme }) => css`
    background: ${theme.selected.main[2]};
    display: flex;
    flex-direction: column;
    height: 100%;

    ${responsive.md(`
      background: none;
    `)}
  `};
`

export const Main = styled.main`
  display: flex;
  margin-top: 66px;
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
