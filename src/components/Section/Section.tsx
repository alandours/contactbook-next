import { ReactNode } from 'react'

import { SectionHeader } from '@/components/SectionHeader'
import { Icons } from '@/ui/icons'

import { SectionContainer, Content } from './styles'

interface SectionProps {
  title: string
  icon?: Icons
  iconSize?: string
  order?: number
  sticky?: boolean
  children: ReactNode
}

export const Section = ({
  title,
  icon,
  iconSize,
  order = 0,
  sticky = false,
  children,
}: SectionProps) => (
  <SectionContainer order={order}>
    <SectionHeader
      sticky={sticky}
      icon={icon}
      title={title}
      iconSize={iconSize}
    />
    <Content>{children}</Content>
  </SectionContainer>
)
