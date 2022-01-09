import { useDispatch, useSelector } from "react-redux";

import { filterTypeWeapon } from "../../redux/weapon/weapon.action";
import { selectWeapons } from "../../redux/weapon/weapon.selector";

import {
  FilterTypeItemContainer,
  TypeItemImage,
} from "./filter-type-item.style";

const FilterTypeItem = ({ item }) => {
  const typeWeaponCurrent = useSelector(selectWeapons);
  const dispatch = useDispatch();

  const { typeWeapon, imageUrl } = item;
  const active = typeWeaponCurrent.find(
    (check) => check.type_weapon === typeWeapon
  );
  return (
    <FilterTypeItemContainer
      isActive={active && typeWeaponCurrent.length === 1}
      onClick={() => dispatch(filterTypeWeapon(typeWeapon))}
    >
      <TypeItemImage src={`${process.env.PUBLIC_URL + imageUrl}`} alt="type" />
    </FilterTypeItemContainer>
  );
};

export default FilterTypeItem;
