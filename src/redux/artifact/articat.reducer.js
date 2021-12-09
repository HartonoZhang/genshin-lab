import { ArtifactActionTypes } from "./artifact.type";

const INITIAL_STATE = {
  listArtifact: null,
  isFetching: false,
  errorMessage: undefined,
  searchArtifact: "",
};

const artifactReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ArtifactActionTypes.FETCH_LIST_ARTIFACT_START:
      return {
        ...state,
        isFetching: true,
      };
    case ArtifactActionTypes.FETCH_LIST_ARTIFACT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        listArtifact: action.payload,
      };
    case ArtifactActionTypes.FETCH_LIST_ARTIFACT_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
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
