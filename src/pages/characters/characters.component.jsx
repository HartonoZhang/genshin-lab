import { Route, useRouteMatch } from "react-router-dom";

import CharacterDetailPage from "../character-detail/character-detail.component";

const CharacterPage = () => {
  const match = useRouteMatch();
  return (
    <div className="character-page">
      <Route
        path={`${match.path}/:characterId`}
        component={CharacterDetailPage}
      />
    </div>
  );
};

export default CharacterPage;
