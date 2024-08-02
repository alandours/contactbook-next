import { OptionProps } from 'react-select'

import { OptionContainer, SelectedIcon } from '../styles'

export const SelectOption = <Option,>({
  innerProps,
  isSelected,
  isFocused,
  children,
}: OptionProps<Option>) => (
  <OptionContainer
    {...innerProps}
    $isFocused={isFocused}
    $isSelected={isSelected}
  >
    <div>{children}</div>
    {isSelected && <SelectedIcon>✓</SelectedIcon>}
  </OptionContainer>
)
