import "./weapon-item.style.scss";

const WeaponItem = ({ weapon }) => {
  const { name, type, rarity, bonus_effect, skill, imgSrc } = weapon;
  return (
    <div className="weapon-item">
      <div className="weapon-name-container">
        <img
          className="weapon-img"
          src={`${process.env.PUBLIC_URL + imgSrc}`}
          alt="weapon"
        />
        <span className="weapon-name">{name}</span>
      </div>
      <div>{type}</div>
      <div className='weapon-rarity-container'>
        <img
          className="star-img"
          src={`${process.env.PUBLIC_URL + rarity}`}
          alt="rarity"
        />
      </div>
      <div>{bonus_effect}</div>
      <div>{skill}</div>
    </div>
  );
};

export default WeaponItem;
