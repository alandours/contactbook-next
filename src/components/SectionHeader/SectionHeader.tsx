import { Icon } from '@/ui'
import { Icons } from '@/ui/icons'

import { SectionHeaderContainer } from './styles'

interface SectionHeaderProps {
  title: string
  icon?: Icons
  iconSize?: string
  sticky?: boolean
}

export const SectionHeader = ({
  title,
  icon,
  iconSize,
  sticky = false,
}: SectionHeaderProps) => (
  <SectionHeaderContainer $sticky={sticky}>
    {!!icon && <Icon name={icon} size={iconSize} />}
    {title}
  </SectionHeaderContainer>
)
