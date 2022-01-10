import { FaBars, FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

import { IconContainer } from "./dropdown-header-icon.style";

import { toggleDropdownHidden } from "../../redux/header/header.action";
import { selectDrodownHeader } from "../../redux/header/header.selector";

const DropdownHeaderIcon = () => {
  const dispatch = useDispatch();
  const hiddenIcon = useSelector(selectDrodownHeader);

  return (
    <IconContainer onClick={() => dispatch(toggleDropdownHidden())}>
      {hiddenIcon ? (
        <FaBars color="white" size={24} />
      ) : (
        <FaTimes color="white" size={24} />
      )}
    </IconContainer>
  );
};

export default DropdownHeaderIcon;
