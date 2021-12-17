import { useSelector } from "react-redux";

import { selectSearchFilterArtifact } from "../../redux/artifact/artifact.selector";

import { ArtifactPreviewContainer } from "./artifact-preview.style";

import ArtifactItem from "../artifact-item/artifact-item.component";
import TextValidationFound from "../text-validation-found/text-validation-found.component";

const ArtifactPreview = ({ artifacts }) => {
  const searchFieldArtifact = useSelector(selectSearchFilterArtifact);

  const filterArtifact = artifacts
    ? artifacts.filter((artifact) =>
        artifact.name.toLowerCase().includes(searchFieldArtifact.toLowerCase())
      )
    : [];

  return (
    <ArtifactPreviewContainer>
      {filterArtifact.length ? (
        filterArtifact.map((item) => (
          <ArtifactItem key={item.id} artifact={item} />
        ))
      ) : (
        <TextValidationFound textField="Artifact Not Found" />
      )}
    </ArtifactPreviewContainer>
  );
};

export default ArtifactPreview;
