import { SearchInputContainer, SearchInputElement } from "./styles"

type SearchInputProps = {
  handleTyping: () => void
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
