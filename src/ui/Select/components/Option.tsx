import { OptionProps } from 'react-select'

import { OptionData } from '../Select'
import { OptionContainer, SelectedIcon } from '../styles'

export const Option = ({
  innerProps,
  isSelected,
  isFocused,
  children,
}: OptionProps<OptionData>) => (
  <OptionContainer
    {...innerProps}
    $isFocused={isFocused}
    $isSelected={isSelected}
  >
    <div>{children}</div>
    {isSelected && <SelectedIcon>✓</SelectedIcon>}
  </OptionContainer>
)
