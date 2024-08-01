import styled from 'styled-components'

import { responsive } from '@/ui/responsive'
import { PageHeader } from '@/components/PageHeader'
import { Link } from '@/ui'

export const ContactHeaderContainer = styled(PageHeader)`
  align-items: center;
  display: flex;
  padding: 2rem 1rem;
  flex-wrap: wrap;

  ${responsive.md(`
    flex-wrap: nowrap;
    padding: 1rem;
  `)}
`

export const EditLink = styled(Link)`
  position: absolute;
  top: 1rem;
  right: 1rem;

  ${responsive.md(`
    align-self: flex-start !important;
    position: relative;
    right: 0;
    top: 0;
  `)}
`
