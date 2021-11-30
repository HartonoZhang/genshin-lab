import { createSelector } from "reselect";

const selectCharacter = (state) => state.character;

export const selectListCharacter = createSelector(
  [selectCharacter],
  (character) => character.listCharacter
);

export const selectCharacters = createSelector(
  [selectListCharacter],
  (listCharacter) => Object.keys(listCharacter).map((key) => listCharacter[key])
);
