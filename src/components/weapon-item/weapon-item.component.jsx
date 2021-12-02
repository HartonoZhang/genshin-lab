import "./weapon-item.style.scss";

const WeaponItem = ({ weapon }) => (
  <div className="weapon-item">
    <div>{weapon.name}</div>
    <div>{weapon.type}</div>
    <div>{weapon.rarity}</div>
    <div>{weapon.bonus_effect}</div>
    <div>{weapon.skill}</div>
  </div>
);

export default WeaponItem;
