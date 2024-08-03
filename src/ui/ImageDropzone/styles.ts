import styled from 'styled-components'
import { responsive } from '../responsive'

export const DropzoneOverlay = styled.div`
  align-items: center;
  background: #000;
  border-radius: 100%;
  color: #fff;
  display: flex;
  justify-content: center;
  position: absolute;
  height: 14rem;
  opacity: 0.75;
  text-align: center;
  transition: opacity 200ms;
  width: 14rem;
  z-index: 100000;

  ${responsive.md(`
    width: 12rem;
    height: 12rem;
  `)}
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
  `)}
`
