import { Component } from "react";
import { connect } from "react-redux";

import {
  convertLisArtifactSnapshotToMap,
  firestore,
} from "../../firebase/firebase.utils";

import { updateListArtifact } from "../../redux/artifact/artifact.action";

import ArticatOverview from "../../components/artifact-overview/artifact-overview.component";
import { ArtifactPageContainer } from "./artifact.style";

class ArtifactPage extends Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateLisArtifact } = this.props;
    const colletionRef = firestore.collection("list_artifact");

    colletionRef.onSnapshot(async (snapshot) => {
      const collectionMap = convertLisArtifactSnapshotToMap(snapshot);
      updateLisArtifact(collectionMap);
    });
  }
  render() {
    return (
      <ArtifactPageContainer>
        <ArticatOverview />
      </ArtifactPageContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateLisArtifact: (artifactMap) =>
    dispatch(updateListArtifact(artifactMap)),
});

export default connect(null, mapDispatchToProps)(ArtifactPage);
