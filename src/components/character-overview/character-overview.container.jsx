import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { isFetchingData } from "../../redux/character/character.selector";

import WithSpinner from "../with-spinner/with-spinner.component";

import characterOverview from "./character-overview.component";

const mapStateToProps = createStructuredSelector({
  isLoading: isFetchingData
})

const OverviewCharacterContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(characterOverview);

export default OverviewCharacterContainer;