import styled from "styled-components";

export const BuildOverviewContainer = styled.div`
  display: flex;
  text-align: center;
  gap: 10px;

  @media screen and (max-width: 750px) {
    flex-direction: column;
  }
`;
