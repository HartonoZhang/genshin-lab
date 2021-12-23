import styled from "styled-components";
import { FontColorVision } from "../../high-order-component/style";

export const BuildItemInfoContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const BuildItemImageContainer = styled.div`
  position: relative;
`;

export const ImageItemRarity = styled.img`
  position: absolute;
  bottom: -2px;
  width: 60px;
  left: 10px;
`;

export const ImageItemBuild = styled.img`
  width: 80px;
  height: 80px;
  background-color: rgb(65, 65, 65);
  padding: 4px;
  border-radius: 10px;
`;

export const BuildInformation = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
`;

export const ItemName = styled.span`
  font-size: 18px;
  padding: 5px 0;
  ${FontColorVision};
`;

export const ItemSubDescription = styled.span`
  color: white;
  font-size: 15px;
`;
