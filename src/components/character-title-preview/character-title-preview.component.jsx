import "./character-title-preview.style.scss";

const CharacterTitlePreview = ({imgSrc, title}) => (
  <div className="character-title-preview">
    <img
      className="vision-src"
      src={`${process.env.PUBLIC_URL + imgSrc}`}
      alt="vision"
    />
    <h2 className="title">{title.toUpperCase()}</h2>
  </div>
);

export default CharacterTitlePreview;
