import { useSelector } from "react-redux";

import { HeaderContainer, HeaderTopContainer, LogoContainer, LogoText } from "./header.style";

import HeaderDropdown from "../header-dropdown/header-dropdown.component";
import HeaderOptions from "../header-options/header-options.component";

import { selectDrodownHeader } from "../../redux/header/header.selector";

const Header = () => {
  const isHidden = useSelector(selectDrodownHeader);
  return (
  <HeaderContainer>
    <HeaderTopContainer>
      <LogoContainer to="/">
        <LogoText>GENSHIN LAB</LogoText>
      </LogoContainer>
      <HeaderOptions />
      {
        isHidden ? "" : <HeaderDropdown />
      }
    </HeaderTopContainer>
  </HeaderContainer>
)};


export default Header;
