import SubtitleCharacterDetail from "../subtitle-character-detail/subtitle-character-detail.component";
import {
  CharacterDetailSubInfoContainer,
  SubInfoDetailContainer,
} from "./character-detail-subinfo.style";
import SubInfoItem from "../subinfo-item/subinfo-item.component";

const CharacterDetailSubInfo = ({ data }) => {
  const { title, list } = data;
  return (
    <CharacterDetailSubInfoContainer>
      <SubtitleCharacterDetail>{title}</SubtitleCharacterDetail>
      <SubInfoDetailContainer>
        {list.map((item) => (
          <SubInfoItem data={item} key={item.id} />
        ))}
      </SubInfoDetailContainer>
    </CharacterDetailSubInfoContainer>
  );
};
export default CharacterDetailSubInfo;
