import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectCharacters,
  selectSearchFilterCharacter,
} from "../../redux/character/character.selector";
import { searchFilterCharacter } from "../../redux/character/character.action";

import { OverviewContainer } from "./character-overview.style";

import CharacterPreview from "../character-preview/character-preview.component";
import SearchBox from "../search-box/search-box.component";
import TextValidationFound from "../text-validation-found/text-validation-found.component";

const CharacterOverview = ({
  listCharacters,
  searchCharactersField,
  searchCharacter,
}) => {
  const characterFilter = listCharacters.map((list) =>
    list.characters.filter((character) =>
      character.name.toLowerCase().includes(searchCharactersField.toLowerCase())
    )
  );
  const conditionCharacterFilter = characterFilter.reduce(
    (accumalatedLength, current) => accumalatedLength + current.length,
    0
  );
  return (
    <OverviewContainer>
      <SearchBox
        placeholderText="Search Character..."
        searchCharacter={searchCharacter}
        titleText="Characters Genshin Impact"
      />
      {conditionCharacterFilter ? (
        listCharacters.map(({ id, ...otherCollectionProps }) => (
          <CharacterPreview searchCharacter={searchCharactersField} key={id} {...otherCollectionProps} />
        ))
      ) : (
        <TextValidationFound textField="Character Not Found" />
      )}
    </OverviewContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  listCharacters: selectCharacters,
  searchCharactersField: selectSearchFilterCharacter,
});

const mapDispatchToProps = (dispatch) => ({
  searchCharacter: (item) => dispatch(searchFilterCharacter(item.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CharacterOverview);
