import { createSelector } from "reselect";

const selectCharacter = (state) => state.character;

export const selectListCharacter = createSelector(
  [selectCharacter],
  (character) => character.listCharacter
);

export const selectListCharacterDetail = createSelector(
  [selectCharacter],
  (character) => character.characterDetail
);

export const selectSearchFilterCharacter = createSelector(
  [selectCharacter],
  (character) => character.searchCharacter 
);

export const selectCharacters = createSelector(
  [selectListCharacter],
  (listCharacter) => Object.keys(listCharacter).map((key) => listCharacter[key])
);

export const selectCharacterDetail = (collectionUrlParam) =>
  createSelector(
    [selectListCharacterDetail],
    (characterDetail) => characterDetail[collectionUrlParam]
  );
 
