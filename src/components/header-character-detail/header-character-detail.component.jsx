import CharacterBioDetail from "../character-bio-detail/character-bio-detail.component";
import CharacterProfile from "../character-profile/character-profile.component";

import {
  HeaderCharacterDetailContainer,
  CharacterBiographyContainer,
  CharacterRatingContainer,
} from "./header-character-detail.style";

const HeaderCharacterDetail = ({ character }) => {
  const { name, rating, vision, weapon_type, imgSrc, rarity, visionImgSrc } =
    character;
  const characterProfileProp = { imgSrc, visionImgSrc };
  const characterBioProp = { name, vision, weapon_type, rarity };
  return (
    <HeaderCharacterDetailContainer className={vision}>
      <CharacterBiographyContainer>
        <CharacterProfile data={characterProfileProp} />
        <CharacterBioDetail data={characterBioProp} />
      </CharacterBiographyContainer>
      <CharacterRatingContainer>
        <span className={vision}>{rating}</span>
      </CharacterRatingContainer>
    </HeaderCharacterDetailContainer>
  );
};

export default HeaderCharacterDetail;
