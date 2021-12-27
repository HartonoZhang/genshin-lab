// import Character_Detail from "./character-data/character-detail.data";

import CharacterActionTypes from "./character.type";

const INITIAL_STATE = {
  listCharacter: null,
  isFetching: false,
  characterDetail: null,
  errorMessage: undefined,
  searchCharacter: "",
};

const characterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CharacterActionTypes.FETCH_LIST_CHARACTERS_START:
    case CharacterActionTypes.FETCH_CHARACTERS_DETAIL_START:
      return {
        ...state,
        searchCharacter: "",
        isFetching: true,
      };
    case CharacterActionTypes.FETCH_LIST_CHARACTERS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        listCharacter: action.payload,
      };
    case CharacterActionTypes.FETCH_CHARACTERS_DETAIL_SUCCESS:
      return {
        ...state,
        isFetching: false,
        characterDetail: action.payload,
      };
    case CharacterActionTypes.FETCH_LIST_CHARACTERS_FAILURE:
    case CharacterActionTypes.FETCH_CHARACTERS_DETAIL_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    case CharacterActionTypes.SEARCH_CHARACTER:
      return {
        ...state,
        searchCharacter: action.payload,
      };
    default:
      return state;
  }
};

export default characterReducer;
