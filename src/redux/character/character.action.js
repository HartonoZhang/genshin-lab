import { CharacterActionTypes } from "./character.type";

export const searchFilterCharacter = (item) => ({
  type: CharacterActionTypes.SEARCH_CHARACTER,
  payload: item,
});