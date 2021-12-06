import {
  CharacterTitlePreviewContainer,
  VisionImage,
  CharacterTitle,
} from "./character-title-preview.style";
const CharacterTitlePreview = ({ imgSrc, title }) => (
  <CharacterTitlePreviewContainer>
    <VisionImage src={`${process.env.PUBLIC_URL + imgSrc}`} alt="vision" />
    <CharacterTitle className={title}>{title.toUpperCase()}</CharacterTitle>
  </CharacterTitlePreviewContainer>
);

export default CharacterTitlePreview;
