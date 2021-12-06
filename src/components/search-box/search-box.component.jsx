import {
  SearchBoxContainer,
  TitleSearch,
  SearchInputContainer,
  SearchBoxInputContainer,
} from "./search-box.style";

const SearchBox = ({ searchCharacter, placeholderText, titleText }) => (
  <SearchBoxContainer>
    <TitleSearch>{titleText}</TitleSearch>
    <SearchBoxInputContainer>
      <SearchInputContainer
        type="search"
        placeholder={placeholderText}
        onChange={searchCharacter}
      />
    </SearchBoxInputContainer>
  </SearchBoxContainer>
);

export default SearchBox;
