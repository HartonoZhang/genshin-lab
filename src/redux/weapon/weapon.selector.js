import { createSelector } from "reselect";

const selectWeapon = (state) => state.weapon;

export const selectListWeapon = createSelector(
  [selectWeapon],
  (weapon) => weapon.listWeapon
);

export const selectSearchWeapon = createSelector(
  [selectWeapon],
  (weapon) => weapon.searchWeapon
);

export const selectTypeWeapon = createSelector(
  [selectWeapon],
  (weapon) => weapon.typeWeapon
);

export const selectWeapons = createSelector([selectListWeapon], (listWeapon) =>
  listWeapon ? Object.keys(listWeapon).map((key) => listWeapon[key]) : []
);
