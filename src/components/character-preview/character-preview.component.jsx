import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectSearchFilterCharacter } from "../../redux/character/character.selector";

import "./character-preview.style.scss";
import CharacterItem from "../character-item/character-item.component";
import CharacterTitlePreview from "../character-title-preview/character-title-preview.component";

const CharacterPreview = ({
  title,
  characters,
  visionImgSrc,
  searchFieldCharacter,
}) => {
  const filterCharacter = characters.filter((character) =>
    character.name.toLowerCase().includes(searchFieldCharacter.toLowerCase())
  );
  return (
    <div className="character-preview">
      {filterCharacter.length ? (
        <div className={`${title} character-preview-container`}>
          <CharacterTitlePreview title={title} imgSrc={visionImgSrc} />
          <div className="character-item-preview">
            {filterCharacter.map((item) => (
              <CharacterItem key={item.id} character={item} />
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  searchFieldCharacter: selectSearchFilterCharacter,
});

export default connect(mapStateToProps)(CharacterPreview);
