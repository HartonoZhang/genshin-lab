import styled, { css } from "styled-components";

const DefaultPageContainer = css`
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

const OverviewContainerStyle = css`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  width: 100%;
  text-align: center;
`;

export const FontColorVision = css`
  &.Pyro {
    color: #d96462;
  }

  &.Cryo {
    color: #42bfdd;
  }

  &.Electro {
    color: #cb4dd5;
  }

  &.Hydro {
    color: #4073d7;
  }

  &.Anemo {
    color: #00cd81;
  }

  &.Geo {
    color: #d9ab42;
  }
`;

export const PageContainer = styled.div`
  ${DefaultPageContainer}
`;

export const OverviewContainer = styled.div`
  ${OverviewContainerStyle}
`;
