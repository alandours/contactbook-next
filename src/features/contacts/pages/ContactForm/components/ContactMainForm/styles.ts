import styled, { css } from 'styled-components'

import { PageHeader } from '@/components/PageHeader'
import { responsive } from '@/ui/responsive'

export const ContactMainFormContainer = styled(PageHeader)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem 0.5rem 0.5rem;

  ${responsive.md(`
    gap: 1rem;
  `)}
`

export const FieldContainer = styled.div<{ $multiline?: boolean }>`
  display: flex;
  gap: 2rem;
  margin: 0.25rem 0;
  width: 100%;

  ${({ $multiline }) =>
    !!$multiline &&
    css`
      flex-wrap: wrap;
    `}

  ${responsive.md(`
    flex-wrap: nowrap;
    gap: 0;
  `)}
`
