import { HeaderDropdownContainer, LinksContainer } from "./header-dropdown.style";

import HeaderOptionItem from "../header-option-item/header-option-item.component";

const HeaderDropdown = () => (
  <HeaderDropdownContainer>
    <LinksContainer>
      <HeaderOptionItem linkNavigate="/" isresponsive='false'>CHARACTERS</HeaderOptionItem>
      <HeaderOptionItem linkNavigate="/artifacts" isresponsive='false'>ARTIFACTS</HeaderOptionItem>
      <HeaderOptionItem linkNavigate="/weapons" isresponsive='false'>WEAPONS</HeaderOptionItem>
    </LinksContainer>
  </HeaderDropdownContainer>
);

export default HeaderDropdown;
