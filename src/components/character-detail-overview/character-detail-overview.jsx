import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { CharacterDetailOverviewContainer } from "./character-detail-overview.style";

import { selectCharacterDetail } from "../../redux/character/character.selector";

import HeaderCharacterDetail from "../header-character-detail/header-character-detail.component";
import CharacterDetailPreview from "../character-detail-preview/character-detail-preview.component";

const CharacterDetailOverview = () => {
  const { characterId } = useParams();
  const character = useSelector(selectCharacterDetail(characterId));
  return (
    <CharacterDetailOverviewContainer>
      <HeaderCharacterDetail character={character} />
      <CharacterDetailPreview character={character} />
    </CharacterDetailOverviewContainer>
  );
};

export default CharacterDetailOverview;
