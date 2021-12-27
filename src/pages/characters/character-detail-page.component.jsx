import { useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

import OverviewCharacterDetailContainer from "../../components/character-detail-overview/character-detail-overview.container";
import { fetchCharacterDetailStart } from "../../redux/character/character.action";
const CharacterDetailPage = () => {
  const { characterId } = useParams();
  
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    dispatch(fetchCharacterDetailStart(characterId));
  }, [dispatch, characterId]);

  return(
    <OverviewCharacterDetailContainer />
  )
}

export default CharacterDetailPage;