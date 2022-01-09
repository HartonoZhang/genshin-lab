import styled from "styled-components";

export const ItemDescriptionContainer = styled.div`
  font-size: 15px;
  text-align: left;
  line-height: 150%;

  span {
    color: white;
  }

  @media screen and (max-width: 750px) {
    text-align: center;
    font-size: 13px;
  }
`;
