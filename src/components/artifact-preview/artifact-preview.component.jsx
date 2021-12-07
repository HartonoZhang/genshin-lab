import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectListArtifact,
  selectSearchFilterArtifact,
} from "../../redux/artifact/artifact.selector";

import { ArtifactPreviewContainer } from "./artifact-preview.style";

import ArtifactItem from "../artifact-item/artifact-item.component";
import TextValidationFound from "../text-validation-found/text-validation-found.component";

const ArtifactPreview = ({ searchFieldArtifact, artifacts }) => {
  const filterArtifact = artifacts.filter((artifact) =>
    artifact.name.toLowerCase().includes(searchFieldArtifact.toLowerCase())
  );
  return (
    <ArtifactPreviewContainer>
      {filterArtifact.length
        ? filterArtifact.map((item) => (
            <ArtifactItem key={item.id} artifact={item} />
          ))
        : (
          <TextValidationFound textField="Artifact Not Found" />
        )}
    </ArtifactPreviewContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  searchFieldArtifact: selectSearchFilterArtifact,
  artifacts: selectListArtifact,
});

export default connect(mapStateToProps)(ArtifactPreview);
