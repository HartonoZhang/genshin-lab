import BuildPreview from "../build-preview/build-preview.component";

import { BuildOverviewContainer } from "./build-overview.style";

const BuildOverview = ({ data }) => {
  const { weapon_build, artifact_build } = data;

  return (
    <BuildOverviewContainer>
      <BuildPreview 
        data={weapon_build} 
        titleBuild="Weapon" 
      />
      <BuildPreview
        data={artifact_build}
        titleBuild="Artifact"
      />
    </BuildOverviewContainer>
  );
};

export default BuildOverview;
