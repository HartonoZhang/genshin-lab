import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { filterTypeWeapon } from "../../redux/weapon/weapon.action";
import { selectWeapons } from "../../redux/weapon/weapon.selector";

import "./filter-type-item.style.scss";

const FilterTypeItem = ({ item, filterWeapon, typeWeaponCurrent }) => {
  const { typeWeapon, imageUrl } = item;
  const active = typeWeaponCurrent.find(
    (check) => check.type_sword === typeWeapon
  );
  return (
    <div
      className={`${
        active && typeWeaponCurrent.length === 1 ? "active" : ""
      } filter-type-item`}
      onClick={() => filterWeapon(typeWeapon)}
    >
      <img
        className="img-type"
        src={`${process.env.PUBLIC_URL + imageUrl}`}
        alt="type"
      />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  typeWeaponCurrent: selectWeapons,
});

const mapDispatchToProps = (dispatch) => ({
  filterWeapon: (item) => dispatch(filterTypeWeapon(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterTypeItem);
