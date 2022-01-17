import { useSelector, useDispatch } from "react-redux";

import { HeaderContainer, HeaderTopContainer, LogoContainer, LogoText } from "./header.style";

import HeaderDropdown from "../header-dropdown/header-dropdown.component";
import HeaderOptions from "../header-options/header-options.component";

import { selectDrodownHeader } from "../../redux/header/header.selector";
import { toggleDropdownHidden } from "../../redux/header/header.action";

const Header = () => {
  const isHidden = useSelector(selectDrodownHeader);
  const dispatch = useDispatch();
  const isDropdown = !isHidden ? () => dispatch(toggleDropdownHidden()) : null;
  return (
  <HeaderContainer>
    <HeaderTopContainer>
      <LogoContainer to="/" onClick={isDropdown}>
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
