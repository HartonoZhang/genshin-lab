import BuildItemDescription from "../build-item-description/build-item-description.component";
import BuildItemInfo from "../build-item-info/build-item-info.component";

import { BuildItemContainer } from "./build-item.style";

const BuildItem = ({ data, vision }) => {
  const { imgSrc, name, description, sub_description, pieceBonus, rarity } =
    data;
  const itemInfoProps = { name, imgSrc, sub_description, rarity, vision };
  const itemDescriptionProps = { description, pieceBonus } ;
  return (
    <BuildItemContainer>
      <BuildItemInfo data={itemInfoProps} />
      <BuildItemDescription data={itemDescriptionProps} />
    </BuildItemContainer>
  );
};

export default BuildItem;