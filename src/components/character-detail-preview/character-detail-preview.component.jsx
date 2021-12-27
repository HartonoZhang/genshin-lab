import CharacterDetailBuild from "../character-detail-build/character-detail-build.component";
import CharacterDetailSubInfo from "../character-detail-subinfo/character-detail-subinfo.component";
import { CharacterDetailPreviewContainer } from "./character-detail-preview.style";

const CharacterDetailPreview = ({ character }) => {
  const { build, constellation, skill_talent, passive } = character;
  return (
    <CharacterDetailPreviewContainer>
      <CharacterDetailBuild build={build} />
      <CharacterDetailSubInfo data={constellation} />
      <CharacterDetailSubInfo data={skill_talent} />
      <CharacterDetailSubInfo data={passive} />
    </CharacterDetailPreviewContainer>
  );
};

export default CharacterDetailPreview;
