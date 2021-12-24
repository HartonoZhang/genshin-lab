import CharacterDetailBuild from "../character-detail-build/character-detail-build.component";
import CharacterDetailSubInfo from "../character-detail-subinfo/character-detail-subinfo.component";
import { CharacterDetailPreviewContainer } from "./character-detail-preview.style";

const CharacterDetailPreview = ({ character }) => {
  const { build, vision, constellation, skill_talent, passive } = character;
  console.log(character);
  return (
    <CharacterDetailPreviewContainer>
      <CharacterDetailBuild build={build} vision={vision} />
      <CharacterDetailSubInfo data={constellation} vision={vision} />
      <CharacterDetailSubInfo data={skill_talent} vision={vision} />
      <CharacterDetailSubInfo data={passive} vision={vision} />
    </CharacterDetailPreviewContainer>
  );
};

export default CharacterDetailPreview;
