import BuildOverview from "../build-overview/build-overview.component";
import SubtitleCharacterDetail from "../subtitle-character-detail/subtitle-character-detail.component";

import {
  CharacterDetailBuildContainer,
  BuildContainer,
  RoleBuildCharacter,
} from "./character-detail-build.style";

const CharacterDetailBuild = ({ build, vision }) => {
  const { title_build, role_build, description, weapon_build, artifact_build } =
    build;
  const buildData = { weapon_build, artifact_build };
  return (
    <CharacterDetailBuildContainer>
      <SubtitleCharacterDetail>{title_build}</SubtitleCharacterDetail>
      <BuildContainer>
        <RoleBuildCharacter className={vision}>{role_build}</RoleBuildCharacter>
        <span>{description}</span>
        <BuildOverview data={buildData} vision={vision} />
      </BuildContainer>
    </CharacterDetailBuildContainer>
  );
};

export default CharacterDetailBuild;
