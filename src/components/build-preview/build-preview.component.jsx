import BuildItem from "../build-item/build-item.component";

import {
  WeaponArtifactBuildContainer,
  TitleBuild,
} from "./build-preview.style";

const BuildPreview = ({ titleBuild, data }) => {
  return (
    <WeaponArtifactBuildContainer>
      <TitleBuild>{titleBuild}</TitleBuild>
      {
        data.map((item) => (
          <BuildItem key={item.id} data={item} />
        ))
      }
    </WeaponArtifactBuildContainer>
  );
};

export default BuildPreview;