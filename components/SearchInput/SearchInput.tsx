import { KeyboardEvent } from 'react'

import { Icons } from '@/ui/icons'

import { SearchIcon, SearchInputContainer, SearchInputElement } from './styles'

interface SearchInputProps {
  handleTyping: (e: KeyboardEvent<HTMLInputElement>) => void
}

export const SearchInput = ({ handleTyping }: SearchInputProps) => (
  <SearchInputContainer>
    <SearchIcon name={Icons.search} size="0.75rem" />
    <SearchInputElement
      type="text"
      placeholder="Search contacts"
      onKeyUp={handleTyping}
      $hasIcon
    />
  </SearchInputContainer>
)
