import {
  GroupBase,
  Props,
  SelectComponentsConfig,
  StylesConfig,
} from 'react-select'
import CreatableSelect from 'react-select/creatable'

import { Label } from '@/ui/Label'

import { Menu } from './components/Menu'
import { SelectOption } from './components/SelectOption'
import { StylesWrapper } from './styles'

export type OptionData = {
  label: string
  value: string
}

export const Select = <
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>({
  label,
  options,
  value,
  defaultValue,
  placeholder = '',
  isSearchable = false,
  isMulti,
  menuPortalTarget,
  onChange,
}: Props<Option, IsMulti, Group>) => {
  const components: Partial<
    SelectComponentsConfig<Option, IsMulti, GroupBase<Option>>
  > = {
    IndicatorSeparator: null,
    Option: SelectOption,
    Menu,
  }

  const styles: Partial<StylesConfig<Option, IsMulti, GroupBase<Option>>> = {
    menuPortal: (base) => ({ ...base, zIndex: 999 }),
  }

  return (
    <StylesWrapper>
      <Label label={label}>
        <CreatableSelect
          label={label}
          classNamePrefix="contactbook-select"
          options={options}
          value={value}
          defaultValue={defaultValue}
          placeholder={placeholder}
          isSearchable={isSearchable}
          isMulti={isMulti}
          menuPortalTarget={menuPortalTarget}
          components={components}
          styles={styles}
          onChange={onChange}
        />
      </Label>
    </StylesWrapper>
  )
}
