import ArtifactActionTypes from "./artifact.type";

export const fetchListArtifactStart = () => ({
  type: ArtifactActionTypes.FETCH_LIST_ARTIFACT_START,
});

export const fetchListArtifactSuccess = (artifactMap) => ({
  type: ArtifactActionTypes.FETCH_LIST_ARTIFACT_SUCCESS,
  payload: artifactMap,
});

export const fetchListArtifactFailure = (error) => ({
  type: ArtifactActionTypes.FETCH_LIST_ARTIFACT_FAILURE,
  payload: error,
});

export const searchFilterArtifact = (item) => ({
  type: ArtifactActionTypes.SEARCH_ARTIFACT,
  payload: item,
});

