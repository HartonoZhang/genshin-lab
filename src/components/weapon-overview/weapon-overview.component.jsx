import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { searchFilterWeapon } from "../../redux/weapon/weapon.action";
import {
  selectWeapons,
  selectSearchWeapon,
  selectTypeWeapon,
} from "../../redux/weapon/weapon.selector";

import "./weapon-overview.style.scss";
import SearchBox from "../search-box/search-box.component";
import WeaponPreview from "../weapon-preview/weapon-preview.component";
import TextValidationFound from "../text-validation-found/text-validation-found.component";
import HeaderOverviewWeapon from "../header-overview-weapon/header-overview-weapon.component";
import FilterTypeOverview from "../filter-type-overview/filter-type-overview.component";

const WeaponOverview = ({
  searchWeapon,
  searchWeaponsField,
  listWeapons,
  typeWeaponFilter,
}) => {
  const weaponFilter = listWeapons.map((list) =>
    list.weapons.filter((weapon) =>
      weapon.name.toLowerCase().includes(searchWeaponsField.toLowerCase())
    )
  );
  const conditionWeaponFilter = weaponFilter.reduce(
    (accumalatedLength, current) => accumalatedLength + current.length,
    0
  );
  return (
    <div className="weapon-overview">
      <SearchBox
        placeholderText="Search Weapon..."
        searchCharacter={searchWeapon}
        titleText="Weapon Genshin Impact"
      />
      <FilterTypeOverview typeFilter={typeWeaponFilter}/>
      <HeaderOverviewWeapon />
      {conditionWeaponFilter ? (
        listWeapons.map(({ id, ...otherCollectionProps }) => (
          <WeaponPreview key={id} {...otherCollectionProps} />
        ))
      ) : (
        <TextValidationFound textField="Weapon Not Found" />
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  listWeapons: selectWeapons,
  searchWeaponsField: selectSearchWeapon,
  typeWeaponFilter: selectTypeWeapon,
});

const mapDispatchToProps = (dispatch) => ({
  searchWeapon: (item) => dispatch(searchFilterWeapon(item.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WeaponOverview);
