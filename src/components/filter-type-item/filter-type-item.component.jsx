import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { filterTypeWeapon } from "../../redux/weapon/weapon.action";
import { selectWeapons } from "../../redux/weapon/weapon.selector";

import {
  FilterTypeItemContainer,
  TypeItemImage,
} from "./filter-type-item.style";

const FilterTypeItem = ({ item, filterWeapon, typeWeaponCurrent }) => {
  const { typeWeapon, imageUrl } = item;
  const active = typeWeaponCurrent.find(
    (check) => check.type_weapon === typeWeapon
  );
  return (
    <FilterTypeItemContainer
      isActive={active && typeWeaponCurrent.length === 1}
      onClick={() => filterWeapon(typeWeapon)}
    >
      <TypeItemImage src={`${process.env.PUBLIC_URL + imageUrl}`} alt="type" />
    </FilterTypeItemContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  typeWeaponCurrent: selectWeapons,
});

const mapDispatchToProps = (dispatch) => ({
  filterWeapon: (item) => dispatch(filterTypeWeapon(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterTypeItem);
