import styled, { css } from 'styled-components'
import { FontSize, FontWeight } from '@/ui/typography'
import { responsive } from '@/ui/responsive'

export const ContactMainDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  margin: 1.75rem 0.75rem 0.75rem;
  width: 100%;

  ${responsive.md(`
    margin: 2.25rem 0 2.25rem 1.5rem
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

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0.5rem 0;
  gap: 0.75rem 0.5rem;
`

export const Tag = styled.div`
  ${({ theme }) => css`
    color: ${theme.selected.main[2]};
    background: ${theme.selected.contrast[1]};
    padding: 0.125rem 0.625rem;
    border-radius: 1rem;
    font-size: 0.75rem;
  `};
`
