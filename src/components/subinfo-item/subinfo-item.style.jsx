import styled from "styled-components";

export const SubInfoItemContainer = styled.div`
  flex: 1 0 32%;
  text-align: center;
  background-color: rgb(54, 53, 53);
  padding: 15px;

  @media screen and (max-width: 750px) {
    flex: 1 0 40%;
  }

  @media screen and (max-width: 650px) {
    flex: 1 0 50%;
  }
`;
