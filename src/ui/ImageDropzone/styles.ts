import styled from 'styled-components'

import { responsive } from '@/ui/responsive'

export const OverlayContainer = styled.div`
  color: #fff;
  position: absolute;
  height: inherit;
  width: inherit;
  z-index: 100;

  ${responsive.md(`
    width: inherit;
    height: inherit;
  `)}
`

export const Overlay = styled.div`
  align-items: center;
  background: #000;
  border-radius: 100%;
  display: flex;
  height: inherit;
  justify-content: center;
  opacity: 0.75;
  padding: 2rem;
  text-align: center;
  width: inherit;
`

export const HoverOverlay = styled(Overlay)`
  opacity: 0;
  transition: opacity 200ms;
`

export const DropzoneContainer = styled.div`
  align-items: center;
  border-radius: 100%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  position: relative;
  width: 14rem;
  height: 14rem;

  ${responsive.md(`
    width: 12rem;
    height: 12rem;

    &:hover {
     ${HoverOverlay} {
        opacity: 0.75;
      }
    }
  `)}
`
