import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { isFetchingData } from "../../redux/character/character.selector";

import WithSpinner from "../with-spinner/with-spinner.component";

import CharacterDetailOverview from "./character-detail-overview";

const mapStateToProps = createStructuredSelector({
  isLoading: isFetchingData
})

const OverviewCharacterDetailContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CharacterDetailOverview);

export default OverviewCharacterDetailContainer;