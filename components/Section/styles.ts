import styled from "styled-components"

export const SectionContainer = styled.section<{ order: number }>`
  position: relative;
  width: 100%;

  ${({ order }) =>
    order &&
    `
    order: ${order};
  `}
`

export const Content = styled.div`
  margin: 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  overflow-x: scroll;
`
