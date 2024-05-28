import styled from "styled-components"

import { FontWeight } from "@/theme/typography"
import { screen } from "@/theme/screen"

export const DatafieldContainer = styled.div`
  border-radius: 2px;
  color: ${({ theme }) => theme.selected.contrast[1]};
  padding: 0.25rem 1.75rem;
  position: relative;
  transition: all ease 200ms;

  &:hover {
    background: ${({ theme }) => theme.selected.main[2]};
    transition: all ease 100ms;
  }
`

export const Text = styled.p`
  text-align: left;
`

export const DataContainer = styled.a`
  display: flex;
  flex-direction: column;

  ${screen.md(`
    flex-direction: row;
  `)}
`

export const Name = styled.div`
  color: ${({ theme }) => theme.mainColor.dark};
  font-weight: ${FontWeight.REGULAR};
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;

  ${screen.md(`
    width: 50%;
  `)}
`

export const Label = styled.div`
  color: ${({ theme }) => theme.selected.contrast[3]};
  word-wrap: break-word;
  width: 100%;

  ${screen.md(`
    width: 50%;
  `)}
`
