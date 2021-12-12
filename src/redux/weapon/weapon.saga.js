import { takeLatest, put, all, call } from "redux-saga/effects";

import WeaponActionTypes from "./weapon.type";

import {
  convertListWeaponsSnapshotToMap,
  firestore,
} from "../../firebase/firebase.utils";

import {
  fetchListWeaponFailure,
  fetchListWeaponSuccess,
} from "./weapon.action";

export function* fetchListWeaponAsync() {
  try {
    const listWeaponRef = firestore.collection("list_weapon");
    const snapshot = yield listWeaponRef.get();
    const listWeaponMap = yield call(convertListWeaponsSnapshotToMap, snapshot);
    yield put(fetchListWeaponSuccess(listWeaponMap));
  } catch (error) {
    yield put(fetchListWeaponFailure(error));
  }
}

export function* fetchListWeaponStart() {
  yield takeLatest(WeaponActionTypes.FETCH_LIST_WEAPON_START, fetchListWeaponAsync);
}

export function* weaponSaga() {
  yield all([call(fetchListWeaponStart)]);
}
