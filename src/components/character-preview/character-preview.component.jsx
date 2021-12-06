import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectSearchFilterCharacter } from "../../redux/character/character.selector";

import { CharacterPreviewContainer, CharacterPreviewHeaderContainer, CharacterPreviewItemContainer } from "./character-preview.style";

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
    <CharacterPreviewContainer>
      {filterCharacter.length ? (
        <CharacterPreviewHeaderContainer className={title}>
          <CharacterTitlePreview title={title} imgSrc={visionImgSrc} />
          <CharacterPreviewItemContainer>
            {filterCharacter.map((item) => (
              <CharacterItem key={item.id} character={item} />
            ))}
          </CharacterPreviewItemContainer>
        </CharacterPreviewHeaderContainer>
      ) : ""}
    </CharacterPreviewContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  searchFieldCharacter: selectSearchFilterCharacter,
});

export default connect(mapStateToProps)(CharacterPreview);
