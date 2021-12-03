import "./weapon-item.style.scss";

const WeaponItem = ({ weapon }) => {
  const {name, type, rarity, bonus_effect, skill} = weapon;
  return (
  <div className="weapon-item">
    <div>{name}</div>
    <div>{type}</div>
    <div>{rarity}</div>
    <div>{bonus_effect}</div>
    <div>{skill}</div>
  </div>
)};

export default WeaponItem;
