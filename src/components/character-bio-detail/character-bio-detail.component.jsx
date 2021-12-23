import { CharacterBiographyDetail, CharacterName, CharacterVision } from "./character-bio-detail.style"

const CharacterBioDetail = ({ data }) => {
  const { name, vision, weapon, rarity } = data;
  return (
    <CharacterBiographyDetail>
      <CharacterName>{name}</CharacterName>
      <span>
        <CharacterVision className={vision}>{vision}</CharacterVision> -{" "}
        {weapon}
      </span>
      <img src={`${process.env.PUBLIC_URL + rarity}`} alt="rarity" />
    </CharacterBiographyDetail>
  );
};

export default CharacterBioDetail;
