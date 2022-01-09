import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  height: 60px;
  width: 100%;
  background-color: rgb(65, 65, 65);
  line-height: 60px;
  position: fixed;
  top: 0;
  opacity: 0.9;
  z-index: 10;
  border-bottom: 1px solid rgb(190, 164, 164);
`;

export const HeaderTopContainer = styled.div`
  max-width: 1080px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 22px;
`;

export const LogoContainer = styled(Link)`
  display: flex;
`;

export const LogoText = styled.span`
  font-size: 18px;
  color: white;
  padding: 0 5px;

  @media screen and (max-width: 700px) {
    font-size: 15px;
  }
`;

export const OptionsContainer = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 700px) {
    display: none;
  }
`;

export const OptionContainer = styled(Link)`
  padding: 0 15px;
  font-size: 14px;
  color: rgb(207, 198, 198);
  transition: 0.5s;

  @media screen and (max-width: 700px) {
    font-size: 12px;
    padding: 0 5px;
  }

  &:hover {
    color: white;
  }
`;
