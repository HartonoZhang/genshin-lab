import ItemDescription from "../character-item-description/character-item-description.component";
import BuildItemInfo from "../build-item-info/build-item-info.component";

import { BuildItemContainer } from "./build-item.style";

const BuildItem = ({ data }) => {
  const { imgSrc, name, description, sub_description, pieceBonus, rarity } =
    data;
  const itemInfoProps = { name, imgSrc, sub_description, rarity };
  const itemDescriptionProps = { description, pieceBonus } ;
  return (
    <BuildItemContainer>
      <BuildItemInfo data={itemInfoProps} />
      <ItemDescription data={itemDescriptionProps} />
    </BuildItemContainer>
  );
};

export default BuildItem;
