import CharacterDetailBuild from "../character-detail-build/character-detail-build.component";
import { CharacterDetailPreviewContainer } from "./character-detail-preview.style";

const CharacterDetailPreview = ({ character }) => {
  const { build, vision } = character;
  console.log(character);
  return (
    <CharacterDetailPreviewContainer>
      <CharacterDetailBuild build={build} vision={vision} />
    </CharacterDetailPreviewContainer>
  );
};

export default CharacterDetailPreview;
