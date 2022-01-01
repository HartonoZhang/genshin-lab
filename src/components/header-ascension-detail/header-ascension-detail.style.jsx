import styled, { css } from "styled-components";
import { HeaderTableDefaultContainer } from "../header-overview-weapon/header-overview-weapon.style";

export const HeaderAscensionStyle = css`
  display: grid;
  grid-template-columns: 14% 19% 67%;
  text-align: center;
`;

export const HeaderAscensionContainer = styled.div`
  ${HeaderAscensionStyle}
  ${HeaderTableDefaultContainer}
`;
