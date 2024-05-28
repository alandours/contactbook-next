import styled from "styled-components"

export const SecondaryInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Notes = styled.p`
  color: ${({ theme }) => theme.selected.contrast[1]};
  margin: 1rem 0;
  padding: 0.25rem 1.75rem;
  white-space: pre-wrap;
`
