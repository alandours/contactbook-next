import styled from "styled-components"

import { zindex } from "@/ui/constants"

export const BackdropContainer = styled.div`
  align-items: center;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: ${zindex.modal};

  &:focus {
    outline: 0;
  }
`
