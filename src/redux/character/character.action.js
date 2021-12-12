import CharacterActionTypes from "./character.type";

import {
  firestore,
  convertListCharactersSnapshotToMap,
} from "../../firebase/firebase.utils";

export const fetchListCharactersStart = () => ({
  type: CharacterActionTypes.FETCH_LIST_CHARACTERS_START,
});

export const fetchListCharactersSuccess = (characterMap) => ({
  type: CharacterActionTypes.FETCH_LIST_CHARACTERS_SUCCESS,
  payload: characterMap,
});

export const fetchListCharactersFailure = (errorMsg) => ({
  type: CharacterActionTypes.FETCH_LIST_CHARACTERS_FAILURE,
  payload: errorMsg,
});

export const fetchListCharactersStartAsync = () => {
  return (dispatch) => {
    const colletionRef = firestore.collection("list_character");
    dispatch(fetchListCharactersStart());

    colletionRef
      .get()
      .then((snapshot) => {
        const collectionMap = convertListCharactersSnapshotToMap(snapshot);
        dispatch(fetchListCharactersSuccess(collectionMap));
      })
      .catch((error) => dispatch(fetchListCharactersFailure(error.message)));
  };
};

export const searchFilterCharacter = (item) => ({
  type: CharacterActionTypes.SEARCH_CHARACTER,
  payload: item,
});

