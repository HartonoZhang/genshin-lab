import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { searchFilterArtifact } from "../../redux/artifact/artifact.action";

import { selectListArtifact } from "../../redux/artifact/artifact.selector";

import { ArtifactOverviewContainer } from "./artifact-overview.style";

import SearchBox from "../search-box/search-box.component";
import HeaderOverviewArtifact from "../header-overview-artifact/header-overview-artifact.component";
import ArtifactPreview from "../artifact-preview/artifact-preview.component";

const ArtifactOverview = ({ searchArtifact, artifacts }) => (
  <ArtifactOverviewContainer>
    <SearchBox
      placeholderText="Search Artifact..."
      searchCharacter={searchArtifact}
      titleText="Artifact Genshin Impact"
    />
    <HeaderOverviewArtifact />
    <ArtifactPreview artifacts={artifacts} />
  </ArtifactOverviewContainer>
);

const mapStateToProps = createStructuredSelector({
  artifacts: selectListArtifact,
});

const mapDispatchToProps = (dispatch) => ({
  searchArtifact: (item) => dispatch(searchFilterArtifact(item.target.value)),
});


export default connect(mapStateToProps, mapDispatchToProps)(ArtifactOverview);
