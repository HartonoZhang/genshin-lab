import { AscensionItemContainer } from "./ascension-item.style";
import MaterialItem from "../material-item/material-item.component";

const AscensionItem = ({ level, material, rank }) => {
  return (
    <AscensionItemContainer>
      <div>{rank}</div>
      <div>{level}</div>
      <div>
        {material.map((item) => (
          <MaterialItem key={item.id} {...item} />
        ))}
      </div>
    </AscensionItemContainer>
  );
};

export default AscensionItem;
