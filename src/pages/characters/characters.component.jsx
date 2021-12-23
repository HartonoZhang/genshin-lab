import { Route, useRouteMatch } from "react-router-dom";

import CharacterDetailOverview from "../../components/character-detail-overview/character-detail-overview";
import { CharacterContainer } from "./characters.style";

const CharacterPage = () => {
  const match = useRouteMatch();
  return (
    <CharacterContainer>
      <Route
        path={`${match.path}/:characterId`}
        component={CharacterDetailOverview}
      />
    </CharacterContainer>
  );
};

export default CharacterPage;
