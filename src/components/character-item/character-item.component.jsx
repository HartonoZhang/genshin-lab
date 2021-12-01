import { withRouter } from "react-router-dom";

import "./character-item.style.scss";

const CharacterItem = ({ character, match, history }) => {
  const { name, imgSrc, linkUrl } = character;
  return (
    <div className="character-item" onClick={() => history.push(`${match.url}characters/${linkUrl}`)}>
      <img
        className="character-dp"
        src={`${process.env.PUBLIC_URL + imgSrc}`}
        alt="character"
      />
      <span className="character-name">{name}</span>
    </div>
  );
};

export default withRouter(CharacterItem);
