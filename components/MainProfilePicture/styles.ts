import styled from "styled-components"
import { screen } from "@/theme/screen"

export const FullSizePicture = styled.img`
  max-height: 100%;
  max-width: 100%;

  ${screen.md(`
    max-height: 90%;
    max-width: 90%;
  `)}
`
