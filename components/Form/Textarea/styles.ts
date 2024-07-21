import styled from "styled-components"

export const TextareaContainer = styled.textarea`
  border: 1px solid ${({ theme }) => theme.selected.contrast[4]};
  min-height: 150px;
  padding: 0.25rem;
  resize: none;

  &:hover,
  &:focus {
    border: 1px solid ${({ theme }) => theme.mainColor.main};
  }
`
