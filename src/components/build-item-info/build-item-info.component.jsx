import { useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { selectCharacterDetailVision } from "../../redux/character/character.selector";

import {
  BuildItemInfoContainer,
  BuildItemImageContainer,
  ImageItemBuild,
  ImageItemRarity,
  BuildInformation,
  ItemName,
  ItemSubDescription,
} from "./build-item-info.style";

const BuildItemInfo = ({ data }) => {
  const { characterId } = useParams();
  const vision = useSelector(selectCharacterDetailVision(characterId));
  const { name, imgSrc, sub_description, rarity } = data;
  return (
    <BuildItemInfoContainer>
      <BuildItemImageContainer>
        <ImageItemBuild
          src={`${process.env.PUBLIC_URL + imgSrc}`}
          alt="srcImg"
        />
        <ImageItemRarity
          src={`${process.env.PUBLIC_URL + rarity}`}
          alt="rarity"
        />
      </BuildItemImageContainer>
      <BuildInformation>
        <ItemName className={vision}>{name}</ItemName>
        <ItemSubDescription>{sub_description}</ItemSubDescription>
      </BuildInformation>
    </BuildItemInfoContainer>
  );
};

export default BuildItemInfo;
