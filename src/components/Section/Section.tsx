import { ReactNode } from 'react'

import { SectionHeader } from '@/components/SectionHeader'
import { Icons } from '@/ui/icons'

import { SectionContainer, Content } from './styles'

interface SectionProps {
  title: string
  icon?: Icons
  order?: number
  sticky?: boolean
  children: ReactNode
}

export const Section = ({
  icon,
  order = 0,
  sticky = false,
  title,
  children,
}: SectionProps) => (
  <SectionContainer order={order}>
    <SectionHeader sticky={sticky} icon={icon} title={title} />
    <Content>{children}</Content>
  </SectionContainer>
)
