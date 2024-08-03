import styled, { css } from 'styled-components'

import { XButton } from '@/components/XButton'
import { Status } from '@/types'

export const CloseButton = styled(XButton)<{ $status: Status }>`
  ${({ theme, $status }) => css`
    & > svg {
      ${$status === Status.SUCCESS &&
      css`
        color: ${theme.mainColor.dark} !important;
      `};

      ${$status === Status.ERROR &&
      css`
        color: ${theme.selected.danger.dark};
      `};

      ${$status === Status.WARNING &&
      css`
        color: ${theme.selected.warning.dark};
      `};
    }
  `}
`

export const ToastWrapper = styled.div`
  display: flex;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 4.125rem;
  width: 100%;
  z-index: 1000;
`

export const ToastContainer = styled.div<{
  $status: Status
  $visible: boolean
}>`
  ${({ theme, $status, $visible }) => css`
    align-items: center;
    border-radius: 0.25rem;
    display: flex;
    justify-content: space-between;
    opacity: 0;
    padding: 0.6rem 1rem;
    transition: opacity 300ms;
    width: 1000px;

    ${$status === Status.SUCCESS &&
    css`
      background: ${theme.mainColor.main};
      border: 1px solid ${theme.mainColor.dark};
      color: ${theme.selected.main[1]};
    `};

    ${$status === Status.ERROR &&
    css`
      background: ${theme.selected.danger.main};
      border: 1px solid ${theme.selected.danger.dark};
      color: ${theme.selected.main[1]};
    `};

    ${$status === Status.WARNING &&
    css`
      background: ${theme.selected.warning.main};
      border: 1px solid ${theme.selected.warning.dark};
      color: ${theme.selected.main[1]};
    `};

    ${$visible &&
    `
      opacity: 1;
    `};
  `}
`
