import Character_Detail from "./character-data/character-detail.data";

import { CharacterActionTypes } from "./character.type";

const INITIAL_STATE = {
  listCharacter: null,
  isFetching: false,
  characterDetail: Character_Detail,
  errorMessage: undefined,
  searchCharacter: "",
};

const characterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CharacterActionTypes.FETCH_LIST_CHARACTERS_START:
      return {
        ...state,
        isFetching: true,
      };
      case CharacterActionTypes.FETCH_LIST_CHARACTERS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        listCharacter: action.payload,
      };
    case CharacterActionTypes.FETCH_LIST_CHARACTERS_FAILURE:
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
    case CharacterActionTypes.CLEAR_SEARCH_CHARACTER:
      return {
        ...state,
        searchCharacter: "",
      };
    default:
      return state;
  }
};

export default characterReducer;
