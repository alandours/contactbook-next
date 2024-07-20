import styled from "styled-components"

import { formElementStyles } from "@/theme/screen"

export const TextareaContainer = styled.textarea`
  ${formElementStyles};

  border: 1px solid ${({ theme }) => theme.selected.contrast[4]};
  min-height: 150px;
  padding: 0.25rem;

  &:hover,
  &:focus {
    border: 1px solid ${({ theme }) => theme.mainColor.main};
  }
`
