import WeaponActionTypes from "./weapon.type";

export const fetchListWeaponStart = () => ({
  type: WeaponActionTypes.FETCH_LIST_WEAPON_START,
});

export const fetchListWeaponSuccess = (weaponMap) => ({
  type: WeaponActionTypes.FETCH_LIST_WEAPON_SUCCESS,
  payload: weaponMap,
});

export const fetchListWeaponFailure = (error) => ({
  type: WeaponActionTypes.FETCH_LIST_WEAPON_FAILURE,
  payload: error,
});

export const searchFilterWeapon = (item) => ({
  type: WeaponActionTypes.SEARCH_WEAPON,
  payload: item,
});

export const filterTypeWeapon = (item) => ({
  type: WeaponActionTypes.FILTER_TYPE_WEAPON,
  payload: item,
});
