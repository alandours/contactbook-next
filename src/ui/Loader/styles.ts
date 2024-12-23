import styled from 'styled-components'

export const LoaderContainer = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.mainColor.main};
  display: flex;
  justify-content: center;
  height: calc(100% - 32px);

  animation-name: spin;
  animation-duration: 1000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`
