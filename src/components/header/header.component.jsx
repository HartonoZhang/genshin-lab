import { Link } from "react-router-dom";

import "./header.style.scss";

const Header = () => (
  <div className="header">
    <div className="header-container">
      <Link className="logo-container" to="/">
        <span className="logo-text">GENSHIN LAB</span>
      </Link>
      <div className="options">
        <Link className="option" to="/">
          CHARACTERS
        </Link>
        <Link className="option" to="/artifacts">
          ARTIFACTS
        </Link>
        <Link className="option" to="/weapons">
          WEAPONS
        </Link>
      </div>
    </div>
  </div>
);

export default Header;
