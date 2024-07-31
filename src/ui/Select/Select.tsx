import ReactSelect, {
  GroupBase,
  MultiValue,
  SelectComponentsConfig,
  SingleValue,
  StylesConfig,
} from 'react-select'

import { Label } from '@/ui/Label'

import { Menu } from './components/Menu'
import { Option } from './components/Option'
import { StylesWrapper } from './styles'

export type OptionData = {
  label: string
  value: string
}

interface SelectProps {
  options: OptionData[]
  value: OptionData
  label: string
  placeholder?: string
  defaultValue?: OptionData
  isSearchable?: boolean
  portalTarget?: HTMLElement | null
  onChange: (newValue: SingleValue<OptionData> | MultiValue<OptionData>) => void
}

export const Select = ({
  options,
  value,
  defaultValue,
  label,
  placeholder = '',
  isSearchable = false,
  portalTarget,
  onChange,
}: SelectProps) => {
  const components: Partial<
    SelectComponentsConfig<OptionData, boolean, GroupBase<OptionData>>
  > = {
    IndicatorSeparator: null,
    Option,
    Menu,
  }

  const styles: Partial<
    StylesConfig<OptionData, boolean, GroupBase<OptionData>>
  > = {
    menuPortal: (base) => ({ ...base, zIndex: 999 }),
  }

  return (
    <StylesWrapper>
      <Label label={label}>
        <ReactSelect
          classNamePrefix="contactbook-select"
          options={options}
          value={value}
          defaultValue={defaultValue}
          placeholder={placeholder}
          isSearchable={isSearchable}
          menuPortalTarget={portalTarget}
          components={components}
          styles={styles}
          onChange={onChange}
        />
      </Label>
    </StylesWrapper>
  )
}
