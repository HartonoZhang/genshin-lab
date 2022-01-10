import DropdownHeaderIcon from "../dropdown-header-icon/dropdown-header-icon.component";
import { HeaderOptionsContainer } from "./header-options.style";
import HeaderOptionItem from "../header-option-item/header-option-item.component";


const HeaderOptions = () => (
  <HeaderOptionsContainer>
    <HeaderOptionItem linkNavigate="/" isresponsive='true'>CHARACTERS</HeaderOptionItem>
    <HeaderOptionItem linkNavigate="/artifacts" isresponsive='true'>ARTIFACTS</HeaderOptionItem>
    <HeaderOptionItem linkNavigate="/weapons" isresponsive='true'>WEAPONS</HeaderOptionItem>
    <DropdownHeaderIcon />
  </HeaderOptionsContainer>
);

export default HeaderOptions;
