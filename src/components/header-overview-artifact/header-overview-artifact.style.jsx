import styled, { css } from "styled-components";
import { HeaderTableDefaultContainer } from "../header-overview-weapon/header-overview-weapon.style";

export const HeaderTableArtifactContainer = css`
  display: grid;
  grid-template-columns: 30% 15% 55%;

  @media screen and (max-width: 700px) {
    grid-template-columns: 100%;
  }
`;

export const TextHeaderResponsive = styled.div`
  @media screen and (max-width: 700px) {
    display: none;
  }
`

export const HeaderOverviewArtifactContainer = styled.div`
  ${HeaderTableArtifactContainer}
  ${HeaderTableDefaultContainer}
`;
