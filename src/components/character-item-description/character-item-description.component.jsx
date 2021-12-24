import { ItemDescriptionContainer } from "./character-item-description.style";

const ItemDescription = ({ data }) => {
  const { description, pieceBonus } = data;
  return (
    <ItemDescriptionContainer>
      {description ? (
        <p>{description}</p>
      ) : (
        pieceBonus.map((item) => (
          <p key={item.setBonus}>
            <span>{item.setBonus}:</span> {item.description} 
          </p>
        ))
        
      )}
    </ItemDescriptionContainer>
  );
};

export default ItemDescription;
