import { BuildItemDescriptionContainer } from "./build-item-description.style";

const BuildItemDescription = ({ data }) => {
  const { description, pieceBonus } = data;
  return (
    <BuildItemDescriptionContainer>
      {description ? (
        <p>{description}</p>
      ) : (
        pieceBonus.map((item) => (
          <p key={item.setBonus}>
            <span>{item.setBonus}:</span> {item.description} 
          </p>
        ))
        
      )}
    </BuildItemDescriptionContainer>
  );
};

export default BuildItemDescription;
