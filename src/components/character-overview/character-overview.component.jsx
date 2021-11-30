import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCharacters } from "../../redux/character/character.selector";

import "./character-overview.style.scss";
import CharacterPreview from "../character-preview/character-preview.component";

const CharacterOverview = ({ listCharacters }) => (
  <div className="character-overview">
  {
    listCharacters.map(({ id, ...otherCollectionProps }) => (
      <CharacterPreview key={id} {...otherCollectionProps} />
    ))
  }
  </div>
);

const mapStateToProps = createStructuredSelector({
  listCharacters: selectCharacters,
});

export default connect(mapStateToProps)(CharacterOverview);
