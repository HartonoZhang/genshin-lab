import { ArtifactActionTypes } from "./artifact.type";

import {
  convertLisArtifactSnapshotToMap,
  firestore,
} from "../../firebase/firebase.utils";

export const fetchListArtifactStart = () => ({
  type: ArtifactActionTypes.FETCH_LIST_ARTIFACT_START,
});

export const fetchListArtifactSuccess = (artifactMap) => ({
  type: ArtifactActionTypes.FETCH_LIST_ARTIFACT_SUCCESS,
  payload: artifactMap,
});

export const fetchListArtifactFailure = (errorMsg) => ({
  type: ArtifactActionTypes.FETCH_LIST_ARTIFACT_FAILURE,
  payload: errorMsg,
});

export const fetchListArtifactStartAsync = () => {
  return (dispatch) => {
    const colletionRef = firestore.collection("list_artifact");
    dispatch(fetchListArtifactStart());

    colletionRef
      .get()
      .then((snapshot) => {
        const collectionMap = convertLisArtifactSnapshotToMap(snapshot);
        dispatch(fetchListArtifactSuccess(collectionMap));
      })
      .catch((error) => dispatch(fetchListArtifactFailure(error.message)));
  };
};

export const searchFilterArtifact = (item) => ({
  type: ArtifactActionTypes.SEARCH_ARTIFACT,
  payload: item,
});

export const clearSearchFilterArtifact = () => ({
  type: ArtifactActionTypes.CLEAR_SEARCH_ARTIFACT,
});
