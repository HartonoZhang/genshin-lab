import styled from "styled-components";
import { FontColorVision } from "../../high-order-component/style";

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
`;

export const CharacterVision = styled.span`
  text-shadow: 0 0 2px black;
  ${FontColorVision};
`;