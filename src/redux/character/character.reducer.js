import Character_Data from "./character-data/character.data";
import Character_Detail from "./character-data/character-detail.data";

import { CharacterActionTypes } from "./character.type";

const INITIAL_STATE = {
  listCharacter: Character_Data,
  characterDetail: Character_Detail, 
  searchCharacter: "",
};

const characterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
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
