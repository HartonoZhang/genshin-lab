import { createSelector } from "reselect";

const selectCharacter = (state) => state.character;

export const selectListCharacter = createSelector(
  [selectCharacter],
  (character) => character.listCharacter
);

export const selectCharacterDetail = createSelector(
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

export const selectFirebaseData = createSelector(
  [selectCharacterDetail],
  (characterDetail) =>
    characterDetail
      ? Object.keys(characterDetail).map((key) => characterDetail[key])
      : []
);

export const selectCharacterDetailVision = () =>
  createSelector([selectCharacterDetail], (characterDetail) =>
    characterDetail ? characterDetail.vision : ""
  );
