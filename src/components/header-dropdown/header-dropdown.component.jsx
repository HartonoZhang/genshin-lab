import { useDispatch } from "react-redux";
import { toggleDropdownHidden } from "../../redux/header/header.action";
import { HeaderDropdownContainer, LinksContainer, LinkContainer } from "./header-dropdown.style";

const HeaderDropdown = () => {
  const dispatch = useDispatch();
  return (
  <HeaderDropdownContainer>
    <LinksContainer>
      <LinkContainer onClick={() => dispatch(toggleDropdownHidden())} to="/">CHARACTERS</LinkContainer>
      <LinkContainer onClick={() => dispatch(toggleDropdownHidden())} to="/artifacts">ARTIFACTS</LinkContainer>
      <LinkContainer onClick={() => dispatch(toggleDropdownHidden())} to="/weapons">WEAPONS</LinkContainer>
    </LinksContainer>
  </HeaderDropdownContainer>
)};

export default HeaderDropdown;
