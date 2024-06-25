import { KeyboardEvent } from "react"
import { SearchInputContainer, SearchInputElement } from "./styles"

type SearchInputProps = {
  handleTyping: (e: KeyboardEvent<HTMLInputElement>) => void
}

export const SearchInput = ({ handleTyping }: SearchInputProps) => (
  <SearchInputContainer>
    {/* <Icon icon="search" /> */}
    <SearchInputElement
      type="text"
      placeholder="Search contacts"
      onKeyUp={handleTyping}
      hasIcon
    />
  </SearchInputContainer>
)
