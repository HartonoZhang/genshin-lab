import { useHistory, useRouteMatch } from "react-router-dom";

import {
  CharacterItemContainer,
  CharacterProfile,
  CharacterNameContainer,
  RoleStatement,
} from "./character-item.style";

const CharacterItem = ({ character }) => {
  const history = useHistory();
  const match = useRouteMatch();
  const checkMatch = match.url === "/" ? match.url : "";
  const { name, imgSrc, linkUrl, role } = character;
  return (
    <CharacterItemContainer
      onClick={() => history.push(`${checkMatch}${linkUrl}`)}
    >
      {role ? <RoleStatement>{role}</RoleStatement> : ""}
      <CharacterProfile
        src={`${process.env.PUBLIC_URL + imgSrc}`}
        alt="character"
      />
      <CharacterNameContainer>{name}</CharacterNameContainer>
    </CharacterItemContainer>
  );
};

export default CharacterItem;
