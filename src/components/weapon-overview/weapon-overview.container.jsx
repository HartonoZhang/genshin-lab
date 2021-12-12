import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { isFetchingData } from "../../redux/weapon/weapon.selector";

import WithSpinner from "../with-spinner/with-spinner.component";

import WeaponOverview from "./weapon-overview.component";

const mapStateToProps = createStructuredSelector({
  isLoading: isFetchingData,
})

const OverviewWeaponContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(WeaponOverview);

export default OverviewWeaponContainer;