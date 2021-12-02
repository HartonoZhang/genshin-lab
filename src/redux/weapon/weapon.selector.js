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
