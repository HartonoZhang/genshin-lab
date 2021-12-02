import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectCharacters,
  selectSearchFilterCharacter,
} from "../../redux/character/character.selector";
import { searchFilterCharacter } from "../../redux/character/character.action";

import "./character-overview.style.scss";
import CharacterPreview from "../character-preview/character-preview.component";
import SearchBox from "../search-box/search-box.component";

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
    <div className="character-overview">
      <SearchBox
        placeholderText="Search Character..."
        searchCharacter={searchCharacter}
        titleText="Characters Genshin Impact"
      />
      {conditionCharacterFilter ? (
        listCharacters.map(({ id, ...otherCollectionProps }) => (
          <CharacterPreview key={id} {...otherCollectionProps} />
        ))
      ) : (
        <h2 className="not-found">Character Not Found</h2>
      )}
    </div>
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
