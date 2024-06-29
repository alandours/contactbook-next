import styled, { css } from "styled-components"

import { XButton } from "@/components/XButton"
import { Status } from "@/types"

export const CloseButton = styled(XButton)<{ status: Status }>`
  position: absolute;
  top: 0.7rem;
  right: 1rem;

  & > svg {
    ${({ status }) =>
      status === Status.SUCCESS &&
      css`
        color: ${({ theme }) => theme.mainColor.dark};
      `};

    ${({ status }) =>
      status === Status.ERROR &&
      css`
        color: ${({ theme }) => theme.selected.danger.dark};
      `};

    ${({ status }) =>
      status === Status.WARNING &&
      css`
        color: ${({ theme }) => theme.selected.warning.dark};
      `};
  }
`

export const ContactMessageContainer = styled.div<{
  status: Status
  visible: boolean
}>`
  border-radius: 4px;
  position: absolute;
  left: 2%;
  opacity: 0;
  padding: 0.6rem 1rem;
  transition: opacity 300ms;
  top: 2%;
  width: 96%;
  z-index: 1000;

  ${({ status }) =>
    status === Status.SUCCESS &&
    css`
      background: ${({ theme }) => theme.mainColor.main};
      border: 1px solid ${({ theme }) => theme.mainColor.dark};
      color: ${({ theme }) => theme.selected.main[1]};
    `};

  ${({ status }) =>
    status === Status.ERROR &&
    css`
      background: ${({ theme }) => theme.selected.danger.main};
      border: 1px solid ${({ theme }) => theme.selected.danger.dark};
      color: ${({ theme }) => theme.selected.main[1]};
    `};

  ${({ status }) =>
    status === Status.WARNING &&
    css`
      background: ${({ theme }) => theme.selected.warning.main};
      border: 1px solid ${({ theme }) => theme.selected.warning.dark};
      color: ${({ theme }) => theme.selected.main[1]};
    `};

  ${({ visible }) =>
    visible &&
    `
    opacity: 1;
  `};
`
