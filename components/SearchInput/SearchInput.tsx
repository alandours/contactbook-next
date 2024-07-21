import { KeyboardEvent } from "react"

import { Icons } from "@/ui/icons"

import { SearchIcon, SearchInputContainer, SearchInputElement } from "./styles"

type SearchInputProps = {
  handleTyping: (e: KeyboardEvent<HTMLInputElement>) => void
}

export const SearchInput = ({ handleTyping }: SearchInputProps) => (
  <SearchInputContainer>
    <SearchIcon name={Icons.search} size="1rem" />
    <SearchInputElement
      type="text"
      placeholder="Search contacts"
      onKeyUp={handleTyping}
      hasIcon
    />
  </SearchInputContainer>
)
