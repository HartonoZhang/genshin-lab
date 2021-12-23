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
  const { name, imgSrc, sub_description, rarity, vision } = data;
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
