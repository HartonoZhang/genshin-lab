import { WeaponActionTypes } from "./weapon.type";

export const searchFilterWeapon = (item) => ({
  type: WeaponActionTypes.SEARCH_WEAPON,
  payload: item,
}); 

export const clearSearchFilterWeapon = () => ({
  type: WeaponActionTypes.CLEAR_SEARCH_WEAPON,
}); 