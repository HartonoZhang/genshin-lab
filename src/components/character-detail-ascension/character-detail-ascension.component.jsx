import SubtitleCharacterDetail from "../subtitle-character-detail/subtitle-character-detail.component";
import HeaderAscensionDetail from "../header-ascension-detail/header-ascension-detail.component";
import AscensionItem from "../ascension-item/ascension-item.component";

import {
  CharacterDetailAscensionContainer,
} from "./character-detail-ascension.style";

const CharacterDetailAscension = ({ dataAscension }) => {
  const { title, list_material } = dataAscension;
  return (
    <CharacterDetailAscensionContainer>
      <SubtitleCharacterDetail>{title}</SubtitleCharacterDetail>
      <HeaderAscensionDetail />
      {list_material.map((item) => (
        <AscensionItem key={item.id} {...item} />
      ))}
    </CharacterDetailAscensionContainer>
  );
};

export default CharacterDetailAscension;
