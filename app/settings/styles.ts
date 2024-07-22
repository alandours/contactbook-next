"use client"

import styled from "styled-components"

import { responsive } from "@/ui/responsive"

export const SettingsContainer = styled.div`
  width: 100%;

  ${responsive.md(`
    position: absolute;
    top: 0;
  `)}
`
