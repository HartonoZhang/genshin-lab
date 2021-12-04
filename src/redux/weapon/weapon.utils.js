export const filterTypeWeaponUtils = (listWeapon, typeWeapon) => {
  return Object.keys(listWeapon).map((key) => listWeapon[key]).filter(key => key.type_sword === typeWeapon);
};