import { connect } from "react-redux";
import { searchFilterWeapon } from "../../redux/weapon/weapon.action";

import "./weapon-overview.style.scss";
import SearchBox from "../search-box/search-box.component";
import WeaponPreview from "../weapon-preview/weapon-preview.component";

const WeaponOverview = ({ searchWeapon }) => {
  return (
  <div className="weapon-overview">
    <SearchBox
      placeholderText="Search Weapon..."
      searchCharacter={searchWeapon}
      titleText="Weapon Genshin Impact"
    />
    <WeaponPreview />
  </div>
)};

const mapDispatchToProps = (dispatch) => ({
  searchWeapon: (item) => dispatch(searchFilterWeapon(item.target.value)),
});

export default connect(null, mapDispatchToProps)(WeaponOverview);
