import Weapon_Data from "./weapon-data/weapon.data";

import { WeaponActionTypes } from "./weapon.type";

const INITIAL_STATE = {
  listWeapon: Weapon_Data,
  searchWeapon: "",
};

const weaponReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case WeaponActionTypes.SEARCH_WEAPON:
      return {
        ...state,
        searchWeapon: action.payload,
      };
    case WeaponActionTypes.CLEAR_SEARCH_WEAPON:
      return {
        ...state,
        searchWeapon: "",
      };
    default:
      return state;
  }
};

export default weaponReducer;
