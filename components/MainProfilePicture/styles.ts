import styled from "styled-components"

import { responsive } from "@/ui/responsive"

export const FullSizeImageContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;

  ${responsive.md(`
   height: 90%;
   width: 60%;
  `)}
`
