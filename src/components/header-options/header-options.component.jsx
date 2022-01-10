import DropdownHeaderIcon from "../dropdown-header-icon/dropdown-header-icon.component";
import { HeaderOptionContainer, HeaderOptionsContainer } from "./header-options.style";

const HeaderOptions = () => (
  <HeaderOptionsContainer>
    <HeaderOptionContainer to="/">CHARACTERS</HeaderOptionContainer>
    <HeaderOptionContainer to="/artifacts">ARTIFACTS</HeaderOptionContainer>
    <HeaderOptionContainer to="/weapons">WEAPONS</HeaderOptionContainer>
    <DropdownHeaderIcon />
  </HeaderOptionsContainer>
);

export default HeaderOptions;
