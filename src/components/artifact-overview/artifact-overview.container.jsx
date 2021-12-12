import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { isFetchingData } from "../../redux/artifact/artifact.selector";

import WithSpinner from "../with-spinner/with-spinner.component";

import ArtifactOverview from "./artifact-overview.component";

const mapStateToProps = createStructuredSelector({
  isLoading: isFetchingData,
})

const OverviewArtifactContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(ArtifactOverview);

export default OverviewArtifactContainer;