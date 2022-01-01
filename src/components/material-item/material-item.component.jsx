import { MaterialItemContainer } from "./material-item.style";

const MaterialItem = ({ imgSrc, name, total }) => {
  return name ? (
  <MaterialItemContainer>
    <img src={`${process.env.PUBLIC_URL + imgSrc}`} alt="material" />
    <span>{name} x {total}</span>
  </MaterialItemContainer>
): ""}

export default MaterialItem;