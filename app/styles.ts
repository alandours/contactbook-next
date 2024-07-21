"use client"

import styled from "styled-components"

import { responsive } from "@/ui/responsive"
import { FontSize, FontWeight } from "@/ui/typography"

export const ContactBook = styled.div`
  background: ${({ theme }) => theme.selected.main[2]};
  color: ${({ theme }) => theme.selected.contrast[1]};
  display: flex;
  flex-direction: column;
  font-size: ${FontSize.TEXT};
  font-weight: ${FontWeight.REGULAR};
  height: 100%;

  ${responsive.md(`
    background: none;
  `)}
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
