import { Component } from "react";
import { connect } from "react-redux";

import { fetchListArtifactStartAsync } from "../../redux/artifact/artifact.action";

import { ArtifactPageContainer } from "./artifacts.style";
import OverviewArtifactContainer from "../../components/artifact-overview/artifact-overview.container";

class ArtifactPage extends Component {
  componentDidMount() {
    const {fetchListArtifactStartAsync} = this.props;
    fetchListArtifactStartAsync();
  }
  render() {
    return (
      <ArtifactPageContainer>
        <OverviewArtifactContainer />
      </ArtifactPageContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchListArtifactStartAsync: () => dispatch(fetchListArtifactStartAsync()),
});

export default connect(null, mapDispatchToProps)(ArtifactPage);
