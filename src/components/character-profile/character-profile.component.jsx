import { CharacterProfileContainer, CharacterImage, VisionImage } from "./character-profile.style";

const CharacterProfile = ({ data }) => {
  const {imgSrc, visionImgSrc} = data;
  return (
    <CharacterProfileContainer>
      <CharacterImage
        src={`${process.env.PUBLIC_URL + imgSrc}`}
        alt="character"
      />
      <VisionImage
        src={`${process.env.PUBLIC_URL + visionImgSrc}`}
        alt="vision"
      />
    </CharacterProfileContainer>
  );
};

export default CharacterProfile;
