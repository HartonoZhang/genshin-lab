import styled from "styled-components";
import { FontColorVision } from "../../high-order-component/style";

export const TeamsOverviewContaienr = styled.div`
  background-color: rgb(54, 53, 53);
  border-radius: 8px;
  padding: 15px;
  text-align: center;
`;

export const TeamTypeTitle = styled.span`
  font-weight: bolder;
  font-size: 18px;
  ${FontColorVision};
`;

export const TeamCharaterContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 4px 0;
`