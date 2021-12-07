import { connect } from "react-redux";

import { searchFilterArtifact } from "../../redux/artifact/artifact.action";

import { ArtifactOverviewContainer } from "./artifact-overview.style";

import SearchBox from "../search-box/search-box.component";
import HeaderOverviewArtifact from "../header-overview-artifact/header-overview-artifact.component";
import ArtifactPreview from "../artifact-preview/artifact-preview.component";

const ArticatOverview = ({searchArtifact}) => (
  <ArtifactOverviewContainer>
    <SearchBox
      placeholderText="Search Artifact..."
      searchCharacter={searchArtifact}
      titleText="Artifact Genshin Impact"
    />
    <HeaderOverviewArtifact />
    <ArtifactPreview />
  </ArtifactOverviewContainer>
);

const mapDispatchToProps = (dispatch) => ({
  searchArtifact: (item) => dispatch(searchFilterArtifact(item.target.value)),
});

export default connect(null, mapDispatchToProps)(ArticatOverview);
