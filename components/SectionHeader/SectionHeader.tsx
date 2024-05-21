import { Icon } from "@/components/Icon"

import { SectionHeaderContainer } from "./styles"

type SectionHeaderProps = {
  title: string
  icon?: string
  sticky?: boolean
}

export const SectionHeader = ({
  title,
  icon,
  sticky = false,
}: SectionHeaderProps) => (
  <SectionHeaderContainer sticky={sticky}>
    {!!icon && <Icon icon={icon} inline />}
    {title}
  </SectionHeaderContainer>
)
