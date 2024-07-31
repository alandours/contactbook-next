import styled, { css } from 'styled-components'
import { FontSize, FontWeight } from '@/ui/typography'
import { responsive } from '@/ui/responsive'

export const ContactMainDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  margin-left: 0.75rem;
  width: 100%;

  ${responsive.md(`
    margin-left: 1.5rem;
  `)}
`

export const MainDatafield = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.selected.contrast[1]};
  display: flex;
  gap: 0.5rem;
`

export const Name = styled.span<{ $birthday: number | null }>`
  display: flex;
  align-items: center;
  margin-right: 0.5rem;

  ${responsive.md(`
    margin-right: 1rem;
  `)}

  &:after {
    ${({ $birthday }) =>
      !!$birthday &&
      css`
        content: '${$birthday}';
        font-size: ${FontSize.BASE};
        font-weight: ${FontWeight.REGULAR};
        color: ${({ theme }) => theme.selected.contrast[3]};
        margin-left: 0.5rem;
        margin-top: 1px;

        ${responsive.md(`
          font-size: ${FontSize.MEDIUM};
          margin-left: 1rem;
        `)}

        ${responsive.lg(`
          font-size: ${FontSize.LARGE};
        `)}
      `};
  }
`

export const Text = styled.p`
  display: inline-block;
`
