import "./character-preview.style.scss";
import CharacterItem from "../character-item/character-item.component";
import CharacterTitlePreview from "../character-title-preview/character-title-preview.component";

const CharacterPreview = ({ title, characters, visionImgSrc }) => (
  <div className="character-preview">
    <CharacterTitlePreview title={title} imgSrc={visionImgSrc}  />
    <div className={`${title} character-item-preview`}>
      {characters.map((item) => (
        <CharacterItem key={item.id} character={item} />
      ))}
    </div>
  </div>
);

export default CharacterPreview;
