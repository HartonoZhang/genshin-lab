import { WeaponPreviewContainer } from "./weapon-preview.style";

import WeaponItem from "../weapon-item/weapon-item.component";

const WeaponPreview = ({ searchWeapon, weapons }) => {
  const filterWeapon = weapons.filter((weapon) =>
    weapon.name.toLowerCase().includes(searchWeapon.toLowerCase())
  );
  return (
    <WeaponPreviewContainer>
      {filterWeapon.length
        ? filterWeapon.map((item) => <WeaponItem key={item.id} weapon={item} />)
        : ""}
    </WeaponPreviewContainer>
  );
};


export default WeaponPreview;
