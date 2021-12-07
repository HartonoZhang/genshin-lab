import Artifact_Data from "./artifact-data/artifact.data";

import { ArtifactActionTypes } from "./artifact.type";

const INITIAL_STATE = {
  listArtifact: Artifact_Data,
  searchArtifact: "",
};

const artifactReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ArtifactActionTypes.SEARCH_ARTIFACT:
      return{
        ...state,
        searchArtifact: action.payload,
      };
      case ArtifactActionTypes.CLEAR_SEARCH_ARTIFACT:
        return {
          ...state,
          searchArtifact: "",
        };
    default:
      return state;
  }
};

export default artifactReducer;
