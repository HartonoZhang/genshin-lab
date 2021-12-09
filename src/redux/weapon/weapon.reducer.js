import { WeaponActionTypes } from "./weapon.type";

import { filterTypeWeaponUtils } from "./weapon.utils";

const INITIAL_STATE = {
  listWeapon: null,
  dataWeapon: null,
  isFetching: false,
  errorMessage: undefined,
  searchWeapon: "",
  typeWeapon: [
    {
      id: 1,
      imageUrl: "/assets/weapon_type/sword.png",
      typeWeapon: "sword",
    },
    {
      id: 2,
      imageUrl: "/assets/weapon_type/claymore.png",
      typeWeapon: "claymore",
    },
    {
      id: 3,
      imageUrl: "/assets/weapon_type/catalyst.png",
      typeWeapon: "catalyst",
    },
    {
      id: 4,
      imageUrl: "/assets/weapon_type/polearm.png",
      typeWeapon: "polearm",
    },
    {
      id: 5,
      imageUrl: "/assets/weapon_type/bow.png",
      typeWeapon: "bow",
    },
  ],
};

const weaponReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case WeaponActionTypes.FETCH_LIST_WEAPON_START:
      return {
        ...state,
        isFetching: true,
      };
    case WeaponActionTypes.FETCH_LIST_WEAPON_SUCCESS:
      return {
        ...state,
        isFetching: false,
        listWeapon: action.payload,
        dataWeapon: action.payload,
      };
    case WeaponActionTypes.FETCH_LIST_WEAPON_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
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
        listWeapon: filterTypeWeaponUtils(state.dataWeapon, action.payload),
      };
    default:
      return state;
  }
};

export default weaponReducer;
