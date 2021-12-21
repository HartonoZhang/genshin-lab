import { withRouter, useHistory, useRouteMatch } from "react-router-dom";

import {
  CharacterItemContainer,
  CharacterProfile,
  CharacterNameContainer,
} from "./character-item.style";

const CharacterItem = ({ character }) => {
  const history = useHistory();
  const match = useRouteMatch();
  const { name, imgSrc, linkUrl } = character;
  return (
    <CharacterItemContainer
      onClick={() => history.push(`${match.url}characters/${linkUrl}`)}
    >
      <CharacterProfile
        src={`${process.env.PUBLIC_URL + imgSrc}`}
        alt="character"
      />
      <CharacterNameContainer>{name}</CharacterNameContainer>
    </CharacterItemContainer>
  );
};

export default withRouter(CharacterItem);
