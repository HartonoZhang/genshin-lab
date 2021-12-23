import BuildItem from "../build-item/build-item.component";
import {
  BuildOverviewContainer,
  WeaponArtifactBuildContainer,
  TitleBuild
} from "./build-overview.style";

const BuildOverview = ({ data, vision }) => {
  const { weapon_build, artifact_build } = data;
  return (
    <BuildOverviewContainer>
      <WeaponArtifactBuildContainer>
        <TitleBuild>Weapon</TitleBuild>
        {weapon_build.map((item) => (
          <BuildItem key={item.id} data={item} vision={vision} />
        ))}
      </WeaponArtifactBuildContainer>
      <WeaponArtifactBuildContainer>
        <TitleBuild>Artifact</TitleBuild>
        {artifact_build.map((item) => (
          <BuildItem key={item.id} data={item} vision={vision} />
        ))}
      </WeaponArtifactBuildContainer>
    </BuildOverviewContainer>
  );
};

export default BuildOverview;
