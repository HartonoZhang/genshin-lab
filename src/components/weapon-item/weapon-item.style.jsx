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
  }
`;

export const WeaponRarity = styled.img`
  margin: 0 auto;

  @media screen and (max-width: 800px) {
    width: 70%;
  }
`

export const WeaponTextColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  margin: 0 auto;

  @media screen and (max-width: 750px) {
    font-size: 12px;
    padding: 0 5px;
  }

  @media screen and (max-width: 500px) {
    font-size: 11px;
  }
`;

export const WeaponName = styled.span`
  margin-top: 4px;

  @media screen and (max-width: 700px) {
    margin-top: 3px;
  }
`;

export const WeaponImage = styled.img`
  width: 110px;
  height: 110px;
  margin: 0 auto;

  @media screen and (max-width: 700px) {
    width: 70px;
    height: 70px;
  }
`;
