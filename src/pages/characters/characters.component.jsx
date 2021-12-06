import { Route } from "react-router-dom";
import { Component } from "react";

import CharacterDetailPage from "../character-detail/character-detail.component";

// import {
//   firestore,
//   convertCharactersSnapshotToMap,
// } from "../../firebase/firebase.utils";

class CharacterPage extends Component {
  unsubscribeFromSnapshot = null;

  // componentDidMount(){
  //   const CollectionRef = firestore.collection('list_character');
  //   CollectionRef.onSnapshot(async snapshot => convertCharactersSnapshotToMap(snapshot));
  // }

  render() {
    const { match } = this.props;
    return (
      <div className="character-page">
        <Route
          path={`${match.path}/:characterId`}
          component={CharacterDetailPage}
        />
      </div>
    );
  }
}

export default CharacterPage;
