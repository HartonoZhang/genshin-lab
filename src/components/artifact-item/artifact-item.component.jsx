import {
  ArtifactItemContainer,
  ArtifactTextColumnContainer,
  ArtifactName,
  ArtifactImage,
  SetBonusBold,
  ArtifactRarity
} from "./artifact-item.style";

const ArtifactItem = ({ artifact }) => {
  const { name, rarity, imgSrc, pieceBonus } = artifact;
  return (
    <ArtifactItemContainer>
      <ArtifactTextColumnContainer>
        <ArtifactImage
          src={`${process.env.PUBLIC_URL + imgSrc}`}
          alt="artifact"
        />
        <ArtifactName>{name}</ArtifactName>
      </ArtifactTextColumnContainer>
      <ArtifactTextColumnContainer>
        <ArtifactRarity src={`${process.env.PUBLIC_URL + rarity}`} alt="rarity" />
      </ArtifactTextColumnContainer>
      <ArtifactTextColumnContainer>
        {pieceBonus.map((bonus) => (
          <p key={bonus.setBonus}>
            <SetBonusBold>{bonus.setBonus}: </SetBonusBold>
            {bonus.description}
          </p>
        ))}
      </ArtifactTextColumnContainer>
    </ArtifactItemContainer>
  );
};

export default ArtifactItem;
