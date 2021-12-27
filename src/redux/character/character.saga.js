import { takeLatest, call, put, all } from "redux-saga/effects";

import CharacterActionTypes from "./character.type";

import {
  firestore,
  convertListCharactersSnapshotToMap,
  convertCharacterDetailSnapshotToData,
} from "../../firebase/firebase.utils";

import {
  fetchListCharactersSuccess,
  fetchListCharactersFailure,
  fetchCharacterDetailFailure,
  fetchCharacterDetailSuccess,
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

export function* fetchCharacterDetailAsync({ payload }) {
  try {
    const characterDetailRef = firestore.collection('character_detail').doc(payload);
    const snapshot = yield characterDetailRef.get();
    const characterDetailMap = yield call(
      convertCharacterDetailSnapshotToData,
      snapshot
    );
    yield put(fetchCharacterDetailSuccess(characterDetailMap));
  } catch (error) {
    yield put(fetchCharacterDetailFailure(error));
  }
}

export function* fetchListCharacterStart() {
  yield takeLatest(
    CharacterActionTypes.FETCH_LIST_CHARACTERS_START,
    fetchListCharacterAsync
  );
}

export function* fetchCharacterDetailStart() {
  yield takeLatest(
    CharacterActionTypes.FETCH_CHARACTERS_DETAIL_START,
    fetchCharacterDetailAsync
  );
}

export function* characterSaga() {
  yield all([call(fetchListCharacterStart), call(fetchCharacterDetailStart)]);
}
