import CharacterActionTypes from "./character.type";

export const fetchListCharactersStart = () => ({
  type: CharacterActionTypes.FETCH_LIST_CHARACTERS_START,
});

export const fetchListCharactersSuccess = (characterMap) => ({
  type: CharacterActionTypes.FETCH_LIST_CHARACTERS_SUCCESS,
  payload: characterMap,
});

export const fetchListCharactersFailure = (error) => ({
  type: CharacterActionTypes.FETCH_LIST_CHARACTERS_FAILURE,
  payload: error,
});

export const fetchCharacterDetailStart = (characterId) => ({
  type: CharacterActionTypes.FETCH_CHARACTERS_DETAIL_START,
  payload: characterId,
});

export const fetchCharacterDetailSuccess = (character) => ({
  type: CharacterActionTypes.FETCH_CHARACTERS_DETAIL_SUCCESS,
  payload: character,
});

export const fetchCharacterDetailFailure = (error) => ({
  type: CharacterActionTypes.FETCH_CHARACTERS_DETAIL_FAILURE,
  payload: error,
});

export const searchFilterCharacter = (item) => ({
  type: CharacterActionTypes.SEARCH_CHARACTER,
  payload: item,
});

