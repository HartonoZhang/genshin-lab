import styled, { css } from "styled-components";

export const DefaultPageContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 50px;
  max-width: 1080px;
  margin: 0 auto;
  background-color: rgb(65, 65, 65);
  border-radius: 20px;
  box-shadow: 3px 6px #302d2d;
`;

export const HomepageContainer = styled.div`
  ${DefaultPageContainer}
`;
