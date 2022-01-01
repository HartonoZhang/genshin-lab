import CharacterItem from "../character-item/character-item.component";
import { TeamsOverviewContaienr, TeamCharaterContainer } from "./teams-overview.style";

const TeamsOverview = ({ data }) => {
  const { characters } = data;
  return (
    <TeamsOverviewContaienr>
      <TeamCharaterContainer>
      {characters.map((item) => (
        <CharacterItem key={item.id} character={item} />
      ))}
      </TeamCharaterContainer>
      
    </TeamsOverviewContaienr>
  )
};


export default TeamsOverview;