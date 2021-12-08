import { CharacterActionTypes } from "./character.type";

export const updateListCharacters = (characterMap) => ({
  type: CharacterActionTypes.UPDATE_LISTCHARACTERS,
  payload: characterMap,
});

export const searchFilterCharacter = (item) => ({
  type: CharacterActionTypes.SEARCH_CHARACTER,
  payload: item,
});

export const clearSearchFilterCharacter = () => ({
  type: CharacterActionTypes.CLEAR_SEARCH_CHARACTER,
});
