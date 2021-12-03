import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { clearSearchFilterWeapon } from "../../redux/weapon/weapon.action";
import { clearSearchFilterCharacter } from "../../redux/character/character.action";

import "./header.style.scss";

const Header = ({ clearSearchWeapon, clearSearchCharacter }) => (
  <div className="header">
    <div className="header-container">
      <Link className="logo-container" to="/">
        <span className="logo-text">GENSHIN LAB</span>
      </Link>
      <div className="options">
        <Link className="option" to="/" onClick={clearSearchCharacter}>
          CHARACTERS
        </Link>
        <Link className="option" to="/artifacts">
          ARTIFACTS
        </Link>
        <Link className="option" to="/weapons" onClick={clearSearchWeapon}>
          WEAPONS
        </Link>
      </div>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  clearSearchCharacter: () => dispatch(clearSearchFilterCharacter()),
  clearSearchWeapon: () => dispatch(clearSearchFilterWeapon()),
});

export default connect(null, mapDispatchToProps)(Header);
