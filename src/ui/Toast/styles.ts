import styled, { css } from 'styled-components'

import { XButton } from '@/components/XButton'
import { Status } from '@/types'
import { responsive } from '../responsive'

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
  top: 1.125rem;
  width: 100%;
  z-index: 1000;

  ${responsive.md(`
    top: 4.125rem;
  `)}
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
    max-width: 1000px;
    opacity: 0;
    padding: 0.6rem 1rem;
    transition: opacity 300ms;
    width: calc(100% - 2rem);

    ${$status === Status.SUCCESS &&
    css`
      background: ${theme.mainColor.light};
      border: 1px solid ${theme.mainColor.dark};
      color: ${theme.selected.main[1]};
    `};

    ${$status === Status.ERROR &&
    css`
      background: ${theme.selected.danger.light};
      border: 1px solid ${theme.selected.danger.dark};
      color: ${theme.selected.main[1]};
    `};

    ${$status === Status.WARNING &&
    css`
      background: ${theme.selected.warning.light};
      border: 1px solid ${theme.selected.warning.dark};
      color: ${theme.selected.main[1]};
    `};

    ${$visible &&
    `
      opacity: 1;
    `};
  `}
`
