import { takeLatest, call, put, all } from "redux-saga/effects";

import CharacterActionTypes from "./character.type";

import {
  firestore,
  convertListCharactersSnapshotToMap,
} from "../../firebase/firebase.utils";

import {
  fetchListCharactersSuccess,
  fetchListCharactersFailure,
} from "./character.action";

export function* fetchListCharacterAsync() {
  try {
    const listCharacterRef = firestore.collection("list_character");
    const snapshot = yield listCharacterRef.get();
    const listCharacterMap = yield call(
      convertListCharactersSnapshotToMap,
      snapshot
    );
    yield put(fetchListCharactersSuccess(listCharacterMap));
  } catch (error) {
    yield put(fetchListCharactersFailure(error));
  }
}

export function* fetchListCharacterStart() {
  yield takeLatest(
    CharacterActionTypes.FETCH_LIST_CHARACTERS_START,
    fetchListCharacterAsync
  );
}

export function* characterSaga() {
  yield all([call(fetchListCharacterStart)]);
}
