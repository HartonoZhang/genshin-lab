import {
  WeaponItemContainer,
  WeaponTextColumnContainer,
  WeaponName,
  WeaponImage,
} from "./weapon-item.style";

const WeaponItem = ({ weapon }) => {
  const { name, type, rarity, bonus_effect, skill, imgSrc } = weapon;
  return (
    <WeaponItemContainer>
      <WeaponTextColumnContainer>
        <WeaponImage src={`${process.env.PUBLIC_URL + imgSrc}`} alt="weapon" />
        <WeaponName>{name}</WeaponName>
      </WeaponTextColumnContainer>
      <div>{type}</div>
      <WeaponTextColumnContainer>
        <img src={`${process.env.PUBLIC_URL + rarity}`} alt="rarity" />
      </WeaponTextColumnContainer>
      <div>{bonus_effect}</div>
      <div>{skill}</div>
    </WeaponItemContainer>
  );
};

export default WeaponItem;
