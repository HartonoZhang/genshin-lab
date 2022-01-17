import styled from "styled-components";
import { FontColorVision } from "../../hoc/style";

export const BuildItemInfoContainer = styled.div`
  display: flex;
  gap: 10px;

  @media screen and (max-width: 750px) {
    margin: 0 auto;
  }
`;

export const BuildItemImageContainer = styled.div`
  position: relative;
`;

export const ImageItemRarity = styled.img`
  position: absolute;
  bottom: -2px;
  left: 10px;

  @media screen and (max-width: 750px) {
    width: 75%;
  }
`;

export const ImageItemBuild = styled.img`
  width: 80px;
  height: 80px;
  background-color: rgb(65, 65, 65);
  padding: 4px;
  border-radius: 10px;

  @media screen and (max-width: 750px) {
    width: 60px;
    height: 60px;
  }
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

  @media screen and (max-width: 750px) {
    font-size: 16px;
  }
`;

export const ItemSubDescription = styled.span`
  color: white;
  font-size: 15px;

  @media screen and (max-width: 750px) {
    font-size: 13px;
  }
`;
