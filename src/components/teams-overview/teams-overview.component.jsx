import { useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { selectCharacterDetailVision } from "../../redux/character/character.selector";
import CharacterItem from "../character-item/character-item.component";
import { TeamsOverviewContaienr, TeamTypeTitle, TeamCharaterContainer } from "./teams-overview.style";

const TeamsOverview = ({ data }) => {
  const { characterId } = useParams();
  const { characters, type_team } = data;
  const vision = useSelector(selectCharacterDetailVision(characterId));
  return (
    <TeamsOverviewContaienr>
      <TeamTypeTitle className={vision}>{type_team}</TeamTypeTitle>
      <TeamCharaterContainer>
      {characters.map((item) => (
        <CharacterItem key={item.id} character={item} />
      ))}
      </TeamCharaterContainer>
      
    </TeamsOverviewContaienr>
  )
};


export default TeamsOverview;