import {
  WeaponItemContainer,
  WeaponTextColumnContainer,
  WeaponName,
  WeaponImage,
  WeaponRarity
} from "./weapon-item.style";

const WeaponItem = ({ weapon }) => {
  const { name, type, rarity, bonus_effect, skill, imgSrc } = weapon;
  return (
    <WeaponItemContainer>
      <WeaponTextColumnContainer>
        <WeaponImage src={`${process.env.PUBLIC_URL + imgSrc}`} alt="weapon" />
        <WeaponName>{name}</WeaponName>
      </WeaponTextColumnContainer>
      <WeaponTextColumnContainer>{type}</WeaponTextColumnContainer>
      <WeaponTextColumnContainer>
        <WeaponRarity src={`${process.env.PUBLIC_URL + rarity}`} alt="rarity" />
      </WeaponTextColumnContainer>
      <WeaponTextColumnContainer>{bonus_effect}</WeaponTextColumnContainer>
      <WeaponTextColumnContainer>{skill}</WeaponTextColumnContainer>
    </WeaponItemContainer>
  );
};

export default WeaponItem;
