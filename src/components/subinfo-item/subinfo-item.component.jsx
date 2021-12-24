import ItemDescription from "../character-item-description/character-item-description.component";
import SubInfoItemDetail from "../subinfo-item-detail/subinfo-item-detail.component";
import { SubInfoItemContainer } from "./subinfo-item.style";

const SubInfoItem = ({ data, vision }) => {
  const {name, description, imgSrc, sub_description} = data;
  const infoDetailProps = {name, imgSrc, sub_description, vision};
  const itemDescriptionProps = { description };
  return (
    <SubInfoItemContainer>
      <SubInfoItemDetail data={infoDetailProps} />
      <ItemDescription data={itemDescriptionProps} />
    </SubInfoItemContainer>
  );
};

export default SubInfoItem;