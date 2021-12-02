import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectListWeapon,
  selectSearchWeapon,
} from "../../redux/weapon/weapon.selector";

import "./weapon-preview.style.scss";
import WeaponItem from "../weapon-item/weapon-item.component";
import TextValidationFound from "../text-validation-found/text-validation-found.component";

const WeaponPreview = ({ listWeapons, searchWeaponsField }) => {
  const filterWeapon = listWeapons.filter((character) =>
    character.name.toLowerCase().includes(searchWeaponsField.toLowerCase())
  );
  return (
    <div className="weapon-preview">
      <div className="header-preview-container">
        <div className="name-weapon">Weapon</div>
        <div className="type-weapon">Type</div>
        <div className="rarity-weapon">Rarity</div>
        <div className="bonus-weapon">Bonus Effect</div>
        <div className="skill-weapon">Skill</div>
      </div>
      {filterWeapon.length ? filterWeapon.map((item) => (
        <WeaponItem key={item.id} weapon={item} />
      )): (
        <TextValidationFound textField="Weapon Not Found" />
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  listWeapons: selectListWeapon,
  searchWeaponsField: selectSearchWeapon,
});

export default connect(mapStateToProps)(WeaponPreview);
