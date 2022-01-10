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

  @media screen and (max-width: 900px) {
    div {
      margin: 6px 0;
    }
  }
`;

export const WeaponRarity = styled.img`
  margin: 0 auto;
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
`;

export const WeaponName = styled.span`
  margin-top: 4px;

  @media screen and (max-width: 700px) {
    margin-top: 5px;
    font-size: 15px;
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
