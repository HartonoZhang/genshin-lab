import { connect } from "react-redux";

import { selectCharacterDetail } from "../../redux/character/character.selector";

import "./character-detail.style.scss";
const CharacterDetailPage = ({ character }) => {
  const {name} = character;
  return (
    <div className="character-detail-page">
      <h1>{name}</h1>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  character: selectCharacterDetail(ownProps.match.params.characterId)(state),
});

export default connect(mapStateToProps)(CharacterDetailPage);
