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

export const isFetchingData = createSelector(
  [selectCharacter],
  (character) => character.isFetching
);

export const selectCharacters = createSelector(
  [selectListCharacter],
  (listCharacter) =>
    listCharacter
      ? Object.keys(listCharacter).map((key) => listCharacter[key])
      : []
);

export const selectCharacterDetail = (collectionUrlParam) =>
  createSelector(
    [selectListCharacterDetail],
    (characterDetail) => characterDetail[collectionUrlParam]
  );

export const selectCharacterDetailToMap = createSelector(
  [selectListCharacterDetail],
  (characterDetail) =>
    characterDetail
      ? Object.keys(characterDetail).map((key) => characterDetail[key])
      : []
);

export const selectCharacterDetailVision = (collectionUrlParam) =>
  createSelector(
    [selectListCharacterDetail],
    (characterDetail) => characterDetail[collectionUrlParam].vision
  );
