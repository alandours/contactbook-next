import { MenuProps } from 'react-select'

import { MenuContainer } from '../styles'

export const Menu = <Option,>({ innerProps, children }: MenuProps<Option>) => (
  <MenuContainer {...innerProps}>{children}</MenuContainer>
)
