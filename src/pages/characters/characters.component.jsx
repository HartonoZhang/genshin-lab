import { Route } from "react-router-dom";
import { Component } from "react";

import CharacterDetailPage from "../character-detail/character-detail.component";

class CharacterPage extends Component {
  unsubscribeFromSnapshot = null;
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
