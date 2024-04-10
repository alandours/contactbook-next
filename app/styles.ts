"use client"

import styled from "styled-components"

import { screen } from "@/theme/screen"

export const ContactBook = styled.div`
  background: ${({ theme }) => theme.selected.main[2]};
  display: flex;
  flex-direction: column;
  height: 100%;

  ${screen.md`
    background: none;
  `}
`

export const Main = styled.main`
  display: flex;
  margin-top: 66px;
  height: auto;
  max-width: 100%;

  ${screen.md`
    margin: auto 1rem;
  `}

  ${screen.lg`
    margin: auto;
    width: 1000px;
  `}
`
