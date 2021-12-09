import { Component } from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import { fetchListArtifactStartAsync } from "../../redux/artifact/artifact.action";
import { isFetchingData } from "../../redux/artifact/artifact.selector";

import WithSpinner from "../../components/with-spinner/with-spinner.component";

import ArtifactOverview from "../../components/artifact-overview/artifact-overview.component";
import { ArtifactPageContainer } from "./artifacts.style";

const ArtifactOverviewWithSpinner = WithSpinner(ArtifactOverview);

class ArtifactPage extends Component {
  componentDidMount() {
    const {fetchListArtifactStartAsync} = this.props;
    fetchListArtifactStartAsync();
  }
  render() {
    const { isFetching } = this.props;
    return (
      <ArtifactPageContainer>
        <ArtifactOverviewWithSpinner isLoading={isFetching} />
      </ArtifactPageContainer>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isFetching: isFetchingData
})

const mapDispatchToProps = (dispatch) => ({
  fetchListArtifactStartAsync: () => dispatch(fetchListArtifactStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ArtifactPage);
