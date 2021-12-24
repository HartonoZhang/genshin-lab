import { SubInfoItemDetailContainer, ItemDetailContainer, ItemName } from "./subinfo-item-detail.style";

const SubInfoItemDetail = ({data}) => {
  const {name, imgSrc, sub_description, vision} = data;
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