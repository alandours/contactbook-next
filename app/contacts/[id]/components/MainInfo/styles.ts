import styled from "styled-components"

import { screen } from "@/theme/screen"
import { PageHeader } from "@/components/PageHeader"
import { Link } from "@/ui"

export const MainInfoContainer = styled(PageHeader)`
  align-items: center;
  display: flex;
  padding: 1rem;
  flex-wrap: wrap;

  ${screen.md(`
    flex-wrap: nowrap;
  `)}
`

export const EditLink = styled(Link)`
  position: absolute;
  top: 1rem;
  right: 1rem;

  ${screen.md(`
    align-self: flex-start !important;
    position: relative;
    right: 0;
    top: 0;
  `)}
`
