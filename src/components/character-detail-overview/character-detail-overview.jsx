import { useSelector } from "react-redux";

import { CharacterDetailOverviewContainer } from "./character-detail-overview.style";

import { selectCharacterDetail } from "../../redux/character/character.selector";

import HeaderCharacterDetail from "../header-character-detail/header-character-detail.component";
import CharacterDetailPreview from "../character-detail-preview/character-detail-preview.component";

const CharacterDetailOverview = () => {
  const character = useSelector(selectCharacterDetail);
  return character ? (
    <CharacterDetailOverviewContainer>
      <HeaderCharacterDetail character={character} />
      <CharacterDetailPreview character={character} />
    </CharacterDetailOverviewContainer>
  ): null;
};

export default CharacterDetailOverview;
