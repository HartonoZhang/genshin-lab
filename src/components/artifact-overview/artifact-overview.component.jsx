import { useDispatch, useSelector } from "react-redux";

import { searchFilterArtifact } from "../../redux/artifact/artifact.action";
import { selectListArtifact } from "../../redux/artifact/artifact.selector";

import { OverviewContainer } from "../../hoc/style";

import SearchBox from "../search-box/search-box.component";
import HeaderOverviewArtifact from "../header-overview-artifact/header-overview-artifact.component";
import ArtifactPreview from "../artifact-preview/artifact-preview.component";

const ArtifactOverview = () => {
  const artifacts = useSelector(selectListArtifact);

  const dispatch = useDispatch();
  const searchArtifact = (item) => {
    dispatch(searchFilterArtifact(item.target.value));
  };

  return (
    <OverviewContainer>
      <SearchBox
        placeholderText="Search Artifact..."
        searchCharacter={searchArtifact}
        titleText="Artifact Genshin Impact"
      />
      <HeaderOverviewArtifact />
      <ArtifactPreview artifacts={artifacts} />
    </OverviewContainer>
  );
};

export default ArtifactOverview;
