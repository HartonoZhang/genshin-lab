import ItemDescription from "../character-item-description/character-item-description.component";
import SubInfoItemDetail from "../subinfo-item-detail/subinfo-item-detail.component";
import { SubInfoItemContainer } from "./subinfo-item.style";

const SubInfoItem = ({ data }) => {
  const {name, description, imgSrc, sub_description} = data;
  const infoDetailProps = {name, imgSrc, sub_description};
  const itemDescriptionProps = { description };
  return (
    <SubInfoItemContainer>
      <SubInfoItemDetail data={infoDetailProps} />
      <ItemDescription data={itemDescriptionProps} />
    </SubInfoItemContainer>
  );
};

export default SubInfoItem;