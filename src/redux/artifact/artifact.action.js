import { ArtifactActionTypes } from "./artifact.type";

export const updateListArtifact = (artifactMap) => ({
  type: ArtifactActionTypes.UPDATE_LISTARTIFACT,
  payload: artifactMap,
});

export const searchFilterArtifact = (item) => ({
  type: ArtifactActionTypes.SEARCH_ARTIFACT,
  payload: item,
});

export const clearSearchFilterArtifact = () => ({
  type: ArtifactActionTypes.CLEAR_SEARCH_ARTIFACT,
});
