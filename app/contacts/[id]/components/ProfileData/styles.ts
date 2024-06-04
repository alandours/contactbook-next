import styled, { css } from "styled-components"
import { FontSize, FontWeight } from "@/theme/typography"
import { screen } from "@/theme/screen"

export const ProfileDataContainer = styled.div`
  margin-left: 0.75rem;
  width: 100%;

  ${screen.md(`
    margin-left: 1.5rem;
  `)}
`

export const MainDatafield = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.selected.contrast[1]};
  display: flex;
  margin: 0.25rem 0;
`

export const Name = styled.span<{ birthday: number | null }>`
  display: flex;
  align-items: center;
  margin-right: 0.5rem;

  ${screen.md(`
    margin-right: 1rem;
  `)}

  &:after {
    ${({ birthday }) =>
      !!birthday &&
      css`
        content: "${birthday}";
        font-size: ${FontSize.BASE};
        font-weight: ${FontWeight.REGULAR};
        color: ${({ theme }) => theme.selected.contrast[3]};
        margin-left: 0.5rem;
        margin-top: 1px;

        ${screen.md(`
          font-size: ${FontSize.MEDIUM};
          margin-left: 1rem;
        `)}

        ${screen.lg(`
          font-size: ${FontSize.LARGE};
        `)}
      `};
  }
`

export const Link = styled.a`
  color: ${({ theme }) => theme.mainColor.dark};
  font-weight: ${FontWeight.REGULAR};
`

export const Text = styled.p`
  display: inline-block;
`
