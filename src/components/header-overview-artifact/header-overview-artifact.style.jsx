import styled, { css } from "styled-components";
import { HeaderTableDefaultContainer } from "../header-overview-weapon/header-overview-weapon.style";

export const HeaderTableArtifactContainer = css`
  display: grid;
  grid-template-columns: 30% 15% 55%;
`;

export const HeaderOverviewArtifactContainer = styled.div`
  ${HeaderTableArtifactContainer}
  ${HeaderTableDefaultContainer}
`;
