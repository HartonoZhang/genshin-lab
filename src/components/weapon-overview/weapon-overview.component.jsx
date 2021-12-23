import { useDispatch, useSelector } from "react-redux";

import { searchFilterWeapon } from "../../redux/weapon/weapon.action";
import {
  selectWeapons,
  selectSearchWeapon,
  selectTypeWeapon,
} from "../../redux/weapon/weapon.selector";

import { OverviewContainer } from "../../high-order-component/style";

import { checkData } from "../../high-order-component/utils-data";

import SearchBox from "../search-box/search-box.component";
import WeaponPreview from "../weapon-preview/weapon-preview.component";
import TextValidationFound from "../text-validation-found/text-validation-found.component";
import HeaderOverviewWeapon from "../header-overview-weapon/header-overview-weapon.component";
import FilterTypeOverview from "../filter-type-overview/filter-type-overview.component";

const WeaponOverview = () => {
  const listWeapons = useSelector(selectWeapons);
  const searchWeaponsField = useSelector(selectSearchWeapon);
  const typeWeaponFilter = useSelector(selectTypeWeapon);

  const dispatch = useDispatch();
  const searchWeapon = (item) => {
    dispatch(searchFilterWeapon(item.target.value));
  };

  const checkCondition = checkData(listWeapons, searchWeaponsField, "weapons");
  return (
    <OverviewContainer>
      <SearchBox
        placeholderText="Search Weapon..."
        searchCharacter={searchWeapon}
        titleText="Weapon Genshin Impact"
      />
      <FilterTypeOverview typeFilter={typeWeaponFilter} />
      <HeaderOverviewWeapon />
      {checkCondition ? (
        listWeapons.map(({ id, ...otherCollectionProps }) => (
          <WeaponPreview
            searchWeapon={searchWeaponsField}
            key={id}
            {...otherCollectionProps}
          />
        ))
      ) : (
        <TextValidationFound textField="Weapon Not Found" />
      )}
    </OverviewContainer>
  );
};

export default WeaponOverview;
