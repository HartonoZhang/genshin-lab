import SubtitleCharacterDetail from "../subtitle-character-detail/subtitle-character-detail.component";
import { CharacterDetailSubInfoContainer, SubInfoDetailContainer } from "./character-detail-subinfo.style";
import SubInfoItem from "../subinfo-item/subinfo-item.component";

const CharacterDetailSubInfo = ({ data, vision }) => {
  const { title, list } = data;
  return (
    <CharacterDetailSubInfoContainer>
      <SubtitleCharacterDetail>{title}</SubtitleCharacterDetail>
      <SubInfoDetailContainer>
        {list.map((item) => (
          <SubInfoItem data={item} vision={vision} key={item.id}  />
        ))}
      </SubInfoDetailContainer>
    </CharacterDetailSubInfoContainer>
  );
};
export default CharacterDetailSubInfo;
