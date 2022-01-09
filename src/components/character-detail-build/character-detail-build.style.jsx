import styled, { css } from "styled-components";
import { FontColorVision } from "../../high-order-component/style";

const DisplayFlexDirection = css`
  display: flex;
  flex-direction: column;
`;

export const CharacterDetailBuildContainer = styled.div`
  ${DisplayFlexDirection};
`;

export const BuildContainer = styled.div`
  ${DisplayFlexDirection};
  background-color: rgb(54, 53, 53);
  padding: 15px;
  border-radius: 8px;
  gap: 15px;
`;

export const RoleBuildCharacter = styled.span`
  font-weight: bolder;
  font-size: 18px;
  ${FontColorVision};

  @media screen and (max-width: 750px) {
    font-size: 16px;
  }
`;

export const RoleBuildDescription = styled.span`
  @media screen and (max-width: 750px) {
    font-size: 14px;
  }
`
