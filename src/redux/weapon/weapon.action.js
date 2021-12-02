import { WeaponActionTypes } from "./weapon.type";

export const searchFilterWeapon = (item) => ({
  type: WeaponActionTypes.SEARCH_WEAPON,
  payload: item,
}); 