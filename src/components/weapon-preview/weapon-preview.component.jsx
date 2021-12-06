import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectSearchWeapon } from "../../redux/weapon/weapon.selector";

import { WeaponPreviewContainer } from "./weapon-preview.style";

import WeaponItem from "../weapon-item/weapon-item.component";

const WeaponPreview = ({ searchWeaponsField, weapons }) => {
  const filterWeapon = weapons.filter((weapon) =>
    weapon.name.toLowerCase().includes(searchWeaponsField.toLowerCase())
  );
  return (
    <WeaponPreviewContainer>
      {filterWeapon.length
        ? filterWeapon.map((item) => <WeaponItem key={item.id} weapon={item} />)
        : ""}
    </WeaponPreviewContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  searchWeaponsField: selectSearchWeapon,
});

export default connect(mapStateToProps)(WeaponPreview);
