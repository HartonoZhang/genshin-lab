import { useDispatch } from "react-redux";
import { OptionItemContainer } from "./header-option-item.style";

import { toggleDropdownHidden } from "../../redux/header/header.action";

const HeaderOptionItem = ({ children, linkNavigate, ...props }) => {
  const dispatch = useDispatch();
  const actionClick = props.isresponsive === 'false' ? () => dispatch(toggleDropdownHidden()) : null;
  return(
  <OptionItemContainer to={`${linkNavigate}`} {...props} onClick={actionClick}>
    {children}
  </OptionItemContainer>
)
}
export default HeaderOptionItem;