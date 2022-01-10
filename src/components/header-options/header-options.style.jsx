import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderOptionsContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderOptionContainer = styled(Link)`
  padding: 0 12px;
  font-size: 14px;
  color: rgb(207, 198, 198);
  transition: 0.5s;

  @media screen and (max-width: 700px) {
    display: none;
  }

  &:hover {
    color: white;
  }
`;
