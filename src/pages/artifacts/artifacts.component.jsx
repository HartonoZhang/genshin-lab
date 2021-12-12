import { Component } from "react";
import { connect } from "react-redux";

import { fetchListArtifactStart } from "../../redux/artifact/artifact.action";

import { ArtifactPageContainer } from "./artifacts.style";
import OverviewArtifactContainer from "../../components/artifact-overview/artifact-overview.container";

class ArtifactPage extends Component {
  componentDidMount() {
    const {fetchListArtifactStart} = this.props;
    fetchListArtifactStart();
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
  fetchListArtifactStart: () => dispatch(fetchListArtifactStart()),
});

export default connect(null, mapDispatchToProps)(ArtifactPage);
