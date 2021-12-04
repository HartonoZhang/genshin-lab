import Weapon_Data from "./weapon-data/weapon.data";
import Weapon_Type_Data from "./weapon-data/weapon-type.data";

import { WeaponActionTypes } from "./weapon.type";

import { filterTypeWeaponUtils } from "./weapon.utils";

const INITIAL_STATE = {
  listWeapon: Weapon_Data,
  searchWeapon: "",
  typeWeapon: Weapon_Type_Data,
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
    case WeaponActionTypes.FILTER_TYPE_WEAPON:
      return {
        ...state,
        listWeapon: filterTypeWeaponUtils(Weapon_Data, action.payload),
      };
    default:
      return state;
  }
};

export default weaponReducer;
