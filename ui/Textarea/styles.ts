import styled, { css } from "styled-components"

export const TextareaContainer = styled.textarea`
  ${({ theme }) => css`
    border: 1px solid ${theme.selected.contrast[4]};
    min-height: 150px;
    padding: 0.25rem;
    resize: none;

    &:hover,
    &:focus {
      border: 1px solid ${theme.mainColor.main};
    }
  `}
`
