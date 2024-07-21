import styled, { css } from "styled-components"

export const ContactGroup = styled.ul`
  position: relative;
`

export const Count = styled.div`
  ${({ theme }) => css`
    border-top: 1px solid ${theme.selected.main[3]};
    color: ${theme.selected.contrast[2]};
    padding: 1rem !important;
    text-align: center;
  `}
`

export const List = styled.div``
