import { Route, useRouteMatch } from "react-router-dom";
import CharacterDetailPage from "./character-detail-page.component";

import { CharacterContainer } from "./characters.style";


const CharacterPage = () => {
  const match = useRouteMatch();
  return (
    <CharacterContainer>
      <Route
        path={`${match.path}/:characterId`}
        component={CharacterDetailPage}
      />
    </CharacterContainer>
  );
};

export default CharacterPage;
