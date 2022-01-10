import { FaBars } from "react-icons/fa";
import { useDispatch } from "react-redux";

import { IconContainer } from "./dropdown-header-icon.style";

import { toggleDropdownHidden } from "../../redux/header/header.action";

const DropdownHeaderIcon = () => {
  const dispatch = useDispatch();
  return(
  <IconContainer onClick={() => dispatch(toggleDropdownHidden())}>
    <FaBars color="white" size={24} />
  </IconContainer>
)}

export default DropdownHeaderIcon;