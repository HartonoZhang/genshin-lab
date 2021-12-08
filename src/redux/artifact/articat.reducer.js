import { ArtifactActionTypes } from "./artifact.type";

const INITIAL_STATE = {
  listArtifact: [],
  searchArtifact: "",
};

const artifactReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ArtifactActionTypes.UPDATE_LISTARTIFACT:
      return {
        ...state,
        listArtifact: action.payload,
      };
    case ArtifactActionTypes.SEARCH_ARTIFACT:
      return {
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
