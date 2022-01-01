import CharacterDetailAscension from "../character-detail-ascension/character-detail-ascension.component";
import CharacterDetailBuild from "../character-detail-build/character-detail-build.component";
import CharacterDetailSubInfo from "../character-detail-subinfo/character-detail-subinfo.component";
import CharacterDetailTeams from "../character-detail-teams/character-detail-teams.component";
import { CharacterDetailPreviewContainer } from "./character-detail-preview.style";

const CharacterDetailPreview = ({ character }) => {
  const { build, constellation, skill_talent, passive, best_team, ascension } = character;
  return (
    <CharacterDetailPreviewContainer>
      <CharacterDetailBuild build={build} />
      <CharacterDetailTeams teamDatas={best_team} />
      <CharacterDetailSubInfo data={constellation} />
      <CharacterDetailSubInfo data={skill_talent} />
      <CharacterDetailSubInfo data={passive} />
      <CharacterDetailAscension dataAscension={ascension} />
    </CharacterDetailPreviewContainer>
  );
};

export default CharacterDetailPreview;
