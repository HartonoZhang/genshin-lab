import { WeaponActionTypes } from "./weapon.type";

export const updateListWeapon = (weaponMap) => ({
  type: WeaponActionTypes.UPDATE_LISTWEAPON,
  payload: weaponMap,
});

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
