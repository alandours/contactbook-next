import styled from "styled-components"
import { responsive } from "@/ui/responsive"

export const FullSizePicture = styled.img`
  max-height: 100%;
  max-width: 100%;

  ${responsive.md(`
    max-height: 90%;
    max-width: 90%;
  `)}
`
