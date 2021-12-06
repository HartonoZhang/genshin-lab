import { connect } from "react-redux";

import { clearSearchFilterWeapon } from "../../redux/weapon/weapon.action";
import { clearSearchFilterCharacter } from "../../redux/character/character.action";

import { HeaderContainer, HeaderTopContainer, LogoContainer, LogoText, OptionContainer, OptionsContainer } from "./header.style";

const Header = ({ clearSearchWeapon, clearSearchCharacter }) => (
  <HeaderContainer>
    <HeaderTopContainer>
      <LogoContainer to="/">
        <LogoText>GENSHIN LAB</LogoText>
      </LogoContainer>
      <OptionsContainer>
        <OptionContainer to="/" onClick={clearSearchCharacter}>
          CHARACTERS
        </OptionContainer>
        <OptionContainer to="/artifacts">
          ARTIFACTS
        </OptionContainer>
        <OptionContainer to="/weapons" onClick={clearSearchWeapon}>
          WEAPONS
        </OptionContainer>
      </OptionsContainer>
    </HeaderTopContainer>
  </HeaderContainer>
);

const mapDispatchToProps = (dispatch) => ({
  clearSearchCharacter: () => dispatch(clearSearchFilterCharacter()),
  clearSearchWeapon: () => dispatch(clearSearchFilterWeapon()),
});

export default connect(null, mapDispatchToProps)(Header);
