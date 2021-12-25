import { useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { selectCharacterDetailVision } from "../../redux/character/character.selector";
import { CharacterBiographyDetail, CharacterName, CharacterVision } from "./character-bio-detail.style"

const CharacterBioDetail = ({ data }) => {
  const { characterId } = useParams();
  const vision = useSelector(selectCharacterDetailVision(characterId));
  const { name, weapon_type, rarity } = data;
  return (
    <CharacterBiographyDetail>
      <CharacterName>{name}</CharacterName>
      <span>
        <CharacterVision className={vision}>{vision}</CharacterVision> -{" "}
        {weapon_type}
      </span>
      <img src={`${process.env.PUBLIC_URL + rarity}`} alt="rarity" />
    </CharacterBiographyDetail>
  );
};

export default CharacterBioDetail;
