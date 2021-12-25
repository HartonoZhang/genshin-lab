import { useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { selectCharacterDetailVision } from "../../redux/character/character.selector";
import { SubInfoItemDetailContainer, ItemDetailContainer, ItemName } from "./subinfo-item-detail.style";

const SubInfoItemDetail = ({ data }) => {
  const { characterId } = useParams();
  const vision = useSelector(selectCharacterDetailVision(characterId));
  const {name, imgSrc, sub_description} = data;
  return (
    <SubInfoItemDetailContainer>
      <img src={`${process.env.PUBLIC_URL + imgSrc}`} alt="srcImg" />
      <ItemDetailContainer>
        <ItemName className={vision}>{name}</ItemName>
        <span>{sub_description}</span>
      </ItemDetailContainer>
    </SubInfoItemDetailContainer>
  )
}

export default SubInfoItemDetail;