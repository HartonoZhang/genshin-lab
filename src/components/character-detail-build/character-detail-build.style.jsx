import styled from "styled-components";
import { FontColorVision } from "../../high-order-component/style";

export const CharacterDetailBuildContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleDetailPreview = styled.h2`
  color: white;
  font-weight: bolder;
  font-size: 22px;
`;

export const BuildContainer = styled.div`
  background-color: rgb(54, 53, 53);
  padding: 15px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const RoleBuildCharacter = styled.span`
  font-weight: bolder;
  font-size: 18px;
  ${FontColorVision};
`;
