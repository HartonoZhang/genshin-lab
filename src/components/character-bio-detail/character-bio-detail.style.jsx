import styled from "styled-components";
import { FontColorVision } from "../../hoc/style";

export const CharacterBiographyDetail = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  align-self: center;
  margin-left: 18px;
  gap: 5px;

  img {
    width: 70px;
  }
`;

export const CharacterName = styled.span`
  font-size: 26px;
  font-weight: bolder;
  text-shadow: 0 0 2px black;

  @media screen and (max-width: 700px) {
    font-size: 20px;
  }

  @media screen and (max-width: 400px) {
    font-size: 15px;
  }
`;

export const CharacterVision = styled.span`
  ${FontColorVision};
  font-weight: bold;
`;

export const CharacterVisionWeapon = styled.span`
  @media screen and (max-width: 400px) {
    font-size: 13px;
  }
`