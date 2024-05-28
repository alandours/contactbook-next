import styled from "styled-components"

export const LoaderContainer = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.mainColor.main};
  display: flex;
  justify-content: center;
  height: calc(100% - 32px);
`
