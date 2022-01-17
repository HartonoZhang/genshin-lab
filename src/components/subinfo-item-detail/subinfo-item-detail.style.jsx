import styled from "styled-components";
import { FontColorVision } from "../../hoc/style";


export const SubInfoItemDetailContainer = styled.div`
  display: flex;
  flex-direction: column;

  img {
    width: 45px;
    height: 45px;
    margin: 10px auto;
  }
`;

export const ItemDetailContainer = styled.div`
  display: flex;
  flex-direction: column;

  span {
    margin: 6px 0;
  }

  @media screen and (max-width: 750px) {
    span{
      font-size: 15px;
    }
  }
`;

export const ItemName = styled.span`
  font-size: 18px;
  font-weight: bolder;
  ${FontColorVision};
`;
