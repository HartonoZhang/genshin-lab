import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const repsonsiveStyles = css`
  border-bottom: 1px solid rgb(190, 164, 164);  
  @media screen and (max-width: 700px) {
    display: none;
  }
`;

const reponsiveForMobile = (props) => {
  if (props.isresponsive === 'true') {
    return repsonsiveStyles;
  }
};

export const OptionItemContainer = styled(Link)`
  padding: 0 10px;
  font-size: 14px;
  color: rgb(207, 198, 198);
  transition: 0.5s;
  ${reponsiveForMobile}

  &:hover {
    color: white;
  }
`;
