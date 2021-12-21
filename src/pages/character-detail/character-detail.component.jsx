import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { selectCharacterDetail } from "../../redux/character/character.selector";

const CharacterDetailPage = () => {
  const { characterId } = useParams();
  const character = useSelector(selectCharacterDetail(characterId))
  const {name} = character;
  return (
    <div className="character-detail-page">
      <h1>{name}</h1>
    </div>
  );
};


export default CharacterDetailPage;
