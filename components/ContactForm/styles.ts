import styled, { css } from "styled-components"

import { zindex } from "@/ui/constants"

export const ContactFormContainer = styled.form`
  overflow: scroll;
  width: 100%;
  margin-bottom: 3.75rem;
`

export const InputContainer = styled.div`
  display: flex;
`

export const FormActions = styled.div<{ edit: boolean }>`
  ${({ theme, edit }) => css`
    background: ${theme.selected.main[1]};
    bottom: 0;
    box-shadow: 0 0 8px 2px ${theme.selected.main.shadow};
    display: flex;
    justify-content: flex-end;
    padding: 0.75rem;
    position: absolute;
    width: 100%;
    z-index: ${zindex.fixed};

    ${!!edit &&
    `
      justify-content: space-between;
    `};
  `}
`
