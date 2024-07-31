import { MenuProps } from 'react-select'

import { OptionData } from '../Select'
import { MenuContainer } from '../styles'

export const Menu = ({ innerProps, children }: MenuProps<OptionData>) => (
  <MenuContainer {...innerProps}>{children}</MenuContainer>
)
