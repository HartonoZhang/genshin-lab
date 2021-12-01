import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCharacters } from "../../redux/character/character.selector";
import { searchFilterCharacter } from "../../redux/character/character.action";

import "./character-overview.style.scss";
import CharacterPreview from "../character-preview/character-preview.component";

const CharacterOverview = ({ listCharacters, searchCharacter }) => (
  <div className="character-overview">
    <input type="search" onChange={searchCharacter} />
    {listCharacters.map(({ id, ...otherCollectionProps }) => (
      <CharacterPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  listCharacters: selectCharacters,
});

const mapDispatchToProps = (dispatch) => ({
  searchCharacter: (item) => dispatch(searchFilterCharacter(item.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CharacterOverview);
