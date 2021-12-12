import { takeLatest, call, put, all } from "redux-saga/effects";

import ArtifactActionTypes from "./artifact.type";

import {
  firestore,
  convertLisArtifactSnapshotToMap,
} from "../../firebase/firebase.utils";

import {
  fetchListArtifactFailure,
  fetchListArtifactSuccess,
} from "./artifact.action";

export function* fetchListArtifactAsync() {
  try {
    const listArtifactRef = firestore.collection("list_artifact");
    const snapshot = yield listArtifactRef.get();
    const listArtifactMap = yield call(
      convertLisArtifactSnapshotToMap,
      snapshot
    );
    yield put(fetchListArtifactSuccess(listArtifactMap));
  } catch (error) {
    yield put(fetchListArtifactFailure(error));
  }
}

export function* fetchListArtifactStart() {
  yield takeLatest(
    ArtifactActionTypes.FETCH_LIST_ARTIFACT_START,
    fetchListArtifactAsync
  );
}

export function* artifactSaga() {
  yield all([call(fetchListArtifactStart)]);
}
