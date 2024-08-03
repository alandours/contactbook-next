import ReactSelect, {
  GroupBase,
  Props,
  SelectComponentsConfig,
  StylesConfig,
} from 'react-select'
import CreatableSelect from 'react-select/creatable'

import { Label } from '@/ui/Label'

import { Menu } from './components/Menu'
import { NoOptionsMessage } from './components/NoOptionsMessage'
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
  isCreatable = false,
  menuPortalTarget,
  onChange,
}: Props<Option, IsMulti, Group>) => {
  const components: Partial<
    SelectComponentsConfig<Option, IsMulti, GroupBase<Option>>
  > = {
    IndicatorSeparator: null,
    Option: SelectOption,
    Menu,
    NoOptionsMessage,
  }

  const styles: Partial<StylesConfig<Option, IsMulti, GroupBase<Option>>> = {
    menuPortal: (base) => ({ ...base, zIndex: 999 }),
  }

  const props = {
    label,
    classNamePrefix: 'contactbook-select',
    options,
    value,
    defaultValue,
    placeholder,
    isSearchable,
    isMulti,
    isCreatable,
    menuPortalTarget,
    components,
    styles,
    onChange,
  }

  return (
    <StylesWrapper>
      <Label label={label}>
        {isCreatable ? (
          <CreatableSelect {...props} />
        ) : (
          <ReactSelect {...props} />
        )}
      </Label>
    </StylesWrapper>
  )
}
