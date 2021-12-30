import BuildItem from "../build-item/build-item.component";

import {
  WeaponArtifactBuildContainer,
  TitleBuild,
  SetItemsContainer,
  Tes
} from "./build-preview.style";

const BuildPreview = ({ titleBuild, data }) => {
  return (
    <WeaponArtifactBuildContainer>
      <TitleBuild>{titleBuild}</TitleBuild>
      {data.map((item) =>
        item.set ? (
          <SetItemsContainer key={item.id}>
            <BuildItem data={item} />
            <Tes>OR</Tes>
          </SetItemsContainer>
        ) : (
          <SetItemsContainer key={item.id}>
            <BuildItem data={item} />
          </SetItemsContainer>
        )
      )}
    </WeaponArtifactBuildContainer>
  );
};

export default BuildPreview;

//  {data.map((item) => (
//   <BuildItem key={item.id} data={item} />
// ))}
