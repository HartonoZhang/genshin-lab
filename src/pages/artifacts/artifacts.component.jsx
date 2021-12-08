import { Component } from "react";
import { connect } from "react-redux";

import {
  convertLisArtifactSnapshotToMap,
  firestore,
} from "../../firebase/firebase.utils";

import { updateListArtifact } from "../../redux/artifact/artifact.action";

import WithSpinner from "../../components/with-spinner/with-spinner.component";

import ArticatOverview from "../../components/artifact-overview/artifact-overview.component";
import { ArtifactPageContainer } from "./artifact.style";

const ArtifactOverviewWithSpinner = WithSpinner(ArticatOverview);

class ArtifactPage extends Component {
  state = {
    loading: true,
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateLisArtifact } = this.props;
    const colletionRef = firestore.collection("list_artifact");

    colletionRef.onSnapshot(async (snapshot) => {
      const collectionMap = convertLisArtifactSnapshotToMap(snapshot);
      updateLisArtifact(collectionMap);
      this.setState({ loading: false });
    });
  }
  render() {
    const {loading} = this.state;
    return (
      <ArtifactPageContainer>
        <ArtifactOverviewWithSpinner isLoading={loading} />
      </ArtifactPageContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateLisArtifact: (artifactMap) =>
    dispatch(updateListArtifact(artifactMap)),
});

export default connect(null, mapDispatchToProps)(ArtifactPage);
