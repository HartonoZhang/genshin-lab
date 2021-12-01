import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectCharacters,
  selectSearchFilterCharacter,
} from "../../redux/character/character.selector";

import "./character-overview.style.scss";
import CharacterPreview from "../character-preview/character-preview.component";
import SearchBox from "../search-box/search-box.component";

const CharacterOverview = ({ listCharacters, searchCharacters }) => {
  const characterFilter = listCharacters.map((list) =>
    list.characters.filter((character) =>
      character.name.toLowerCase().includes(searchCharacters.toLowerCase())
    )
  );
  const conditionCharacterFilter = characterFilter.reduce(
    (accumalatedLength, current) => accumalatedLength + current.length,
    0
  );
  return (
    <div className="character-overview">
      <SearchBox />
      {conditionCharacterFilter ? (
        listCharacters.map(({ id, ...otherCollectionProps }) => (
          <CharacterPreview key={id} {...otherCollectionProps} />
        ))
      ) : (
        <h2 className='not-found'>Character Not Found</h2>
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  listCharacters: selectCharacters,
  searchCharacters: selectSearchFilterCharacter,
});

export default connect(mapStateToProps)(CharacterOverview);
