import SubtitleCharacterDetail from "../subtitle-character-detail/subtitle-character-detail.component";
import TeamsOverview from "../teams-overview/teams-overview.component";
import { CharacterDetailTeamsContainer, CharacterDetailTeamsOverviewContainer } from "./character-detail-teams.style";

const CharacterDetailTeams = ({ teamDatas }) => {
  const { title, teams } = teamDatas;
  return <CharacterDetailTeamsContainer>
    <SubtitleCharacterDetail>{title}</SubtitleCharacterDetail>
    <CharacterDetailTeamsOverviewContainer>
      {
        teams.map(item => (
          <TeamsOverview key={item.id} data={item} />
        ))
      }
    </CharacterDetailTeamsOverviewContainer>
  </CharacterDetailTeamsContainer>;
};

export default CharacterDetailTeams;
