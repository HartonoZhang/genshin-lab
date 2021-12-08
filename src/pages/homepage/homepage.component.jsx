import { Component } from "react";
import { connect } from "react-redux";

import {
  firestore,
  convertListCharactersSnapshotToMap,
} from "../../firebase/firebase.utils";

import { updateListCharacters } from "../../redux/character/character.action";

import { HomepageContainer } from "./homepage.style";
import CharacterOverview from "../../components/character-overview/character-overview.component";

class HomePage extends Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateListCharacer } = this.props;
    const colletionRef = firestore.collection("list_character");

    colletionRef.onSnapshot(async (snapshot) => {
      const collectionMap = convertListCharactersSnapshotToMap(snapshot);
      updateListCharacer(collectionMap);
    });
  }
  render() {
    return (
      <HomepageContainer>
        <CharacterOverview />
      </HomepageContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateListCharacer: (characterMap) =>
    dispatch(updateListCharacters(characterMap)),
});
export default connect(null, mapDispatchToProps)(HomePage);
