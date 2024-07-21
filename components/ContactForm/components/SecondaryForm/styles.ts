import styled, { css } from "styled-components"

import { responsive } from "@/ui/responsive"
import { XButton } from "@/components/XButton"

export const SecondaryFormContainer = styled.div``

export const RemoveButton = styled(XButton)`
  margin-left: 1.5rem;
  transition: all ease 200ms;
  position: absolute;
  right: 0;
  top: -2rem;

  ${responsive.md(`
    margin-left: 0.75rem;
    opacity: 0;
    position: initial;
    visibility: hidden;
  `)}
`

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 3rem 0;
  position: relative;

  ${responsive.md(`
    flex-direction: row;
    margin: 0.75rem 0;
  `)}

  &:hover ${RemoveButton} {
    opacity: 1;
    visibility: visible;
    transition: all ease 100ms;
  }
`

export const Option = styled.option`
  color: #000;
`
