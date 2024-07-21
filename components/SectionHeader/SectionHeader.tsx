import { Icon } from "@/ui"
import { Icons } from "@/ui/icons"

import { SectionHeaderContainer } from "./styles"

type SectionHeaderProps = {
  title: string
  icon?: Icons
  sticky?: boolean
}

export const SectionHeader = ({
  title,
  icon,
  sticky = false,
}: SectionHeaderProps) => (
  <SectionHeaderContainer sticky={sticky}>
    {!!icon && <Icon name={icon} />}
    {title}
  </SectionHeaderContainer>
)
