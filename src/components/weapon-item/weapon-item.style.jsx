import styled from "styled-components";
import { HeaderTableWeaponContainer } from "../header-overview-weapon/header-overview-weapon.style";

export const WeaponItemContainer = styled.div`
  ${HeaderTableWeaponContainer}
  color: rgb(212, 198, 198);
  padding: 8px;
  border: 1px solid #bea4a4;
  font-size: 14px;
  background-color: rgb(56, 51, 51);

  div {
    display: grid;
    align-items: center;
    padding: 5px;
  }
`;

export const WeaponTextColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  margin: 0 auto;
`;

export const WeaponName = styled.span`
  margin-top: 4px;
`;

export const WeaponImage = styled.img`
  width: 110px;
  height: 110px;
`;
