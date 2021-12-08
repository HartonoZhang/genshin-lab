import { Component } from "react";
import { connect } from "react-redux";

import {
  firestore,
  convertListCharactersSnapshotToMap,
} from "../../firebase/firebase.utils";

import { updateListCharacters } from "../../redux/character/character.action";

import WithSpinner from "../../components/with-spinner/with-spinner.component";

import { HomepageContainer } from "./homepage.style";
import CharacterOverview from "../../components/character-overview/character-overview.component";

const CharacterOverviewWithSpinner = WithSpinner(CharacterOverview);

class HomePage extends Component {
  state = {
    loading: true,
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateListCharacer } = this.props;
    const colletionRef = firestore.collection("list_character");

    colletionRef.onSnapshot(async (snapshot) => {
      const collectionMap = convertListCharactersSnapshotToMap(snapshot);
      updateListCharacer(collectionMap);
      this.setState({ loading: false });
    });
  }
  render() {
    const {loading} = this.state;
    return (
      <HomepageContainer>
        <CharacterOverviewWithSpinner isLoading={loading} />
      </HomepageContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateListCharacer: (characterMap) =>
    dispatch(updateListCharacters(characterMap)),
});
export default connect(null, mapDispatchToProps)(HomePage);
