import styled, { css } from "styled-components";

export const HeaderTableWeaponContainer = css`
  display: grid;
  grid-template-columns: 23% 10% 10% 12% 45%;
`;

export const HeaderTableDefaultContainer = css`
  width: 100%;
  color: white;
  padding: 6px;
  border: 1px solid #bea4a4;
  font-size: 16px;
  background-color: rgb(27, 23, 23);
  margin-top: 8px;
`;

export const HeaderOverviewWeaponContainer = styled.div`
  ${HeaderTableWeaponContainer}
  ${HeaderTableDefaultContainer}
`;
