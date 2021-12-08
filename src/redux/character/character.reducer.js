import Character_Detail from "./character-data/character-detail.data";

import { CharacterActionTypes } from "./character.type";

const INITIAL_STATE = {
  listCharacter: null,
  characterDetail: Character_Detail,
  searchCharacter: "",
};

const characterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CharacterActionTypes.UPDATE_LISTCHARACTERS:
      return {
        ...state,
        listCharacter: action.payload,
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
