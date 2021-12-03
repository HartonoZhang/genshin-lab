import "./weapon-item.style.scss";

const WeaponItem = ({ weapon, styleLength }) => {
  const { name, type, rarity, bonus_effect, skill, imgSrc } = weapon;
  return (
    <div className={`table${styleLength % 2} weapon-item`}>
      <div className='weapon-name-container'>
        <img
          className="weapon-img"
          src={`${process.env.PUBLIC_URL + imgSrc}`}
          alt="weapon"
        />
        <span className='weapon-name'>{name}</span>
      </div>
      <div>{type}</div>
      <div>{rarity}</div>
      <div>{bonus_effect}</div>
      <div>{skill}</div>
    </div>
  );
};

export default WeaponItem;
