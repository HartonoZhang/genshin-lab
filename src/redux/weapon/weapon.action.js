import { WeaponActionTypes } from "./weapon.type";

import {
  firestore,
  convertListWeaponsSnapshotToMap,
} from "../../firebase/firebase.utils";

export const fetchListWeaponStart = () => ({
  type: WeaponActionTypes.FETCH_LIST_WEAPON_START,
});

export const fetchListWeaponSuccess = (weaponMap) => ({
  type: WeaponActionTypes.FETCH_LIST_WEAPON_SUCCESS,
  payload: weaponMap,
});

export const fetchListWeaponFailure = (errorMsg) => ({
  type: WeaponActionTypes.FETCH_LIST_WEAPON_FAILURE,
  payload: errorMsg,
});

export const fetchListWeaponStartAsync = () => {
  return (dispatch) => {
    const colletionRef = firestore.collection("list_weapon");
    dispatch(fetchListWeaponStart());

    colletionRef
      .get()
      .then((snapshot) => {
        const collectionMap = convertListWeaponsSnapshotToMap(snapshot);
        dispatch(fetchListWeaponSuccess(collectionMap));
      })
      .catch((error) => dispatch(fetchListWeaponFailure(error.message)));
  };
};

export const searchFilterWeapon = (item) => ({
  type: WeaponActionTypes.SEARCH_WEAPON,
  payload: item,
});

export const clearSearchFilterWeapon = () => ({
  type: WeaponActionTypes.CLEAR_SEARCH_WEAPON,
});

export const filterTypeWeapon = (item) => ({
  type: WeaponActionTypes.FILTER_TYPE_WEAPON,
  payload: item,
});
