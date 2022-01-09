import styled from "styled-components";
import { HeaderTableArtifactContainer } from "../header-overview-artifact/header-overview-artifact.style";

export const ArtifactItemContainer = styled.div`
  ${HeaderTableArtifactContainer}
  color: rgb(212, 198, 198);
  padding: 8px;
  border: 1px solid #bea4a4;
  font-size: 14px;
  background-color: rgb(56, 51, 51);

  div {
    display: grid;
    align-items: center;
  }
`

export const ArtifactRarity = styled.img`
  margin: 0 auto;
`

export const ArtifactTextColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  margin: 0 auto;

  @media screen and (max-width: 700px) {
    font-size: 12px;
    padding: 0 10px;
  }

  @media screen and (max-width: 500px) {
    font-size: 11px;
  }
`;

export const ArtifactName = styled.span`
  margin-top: 4px;

  @media screen and (max-width: 700px) {
    margin-top: 1px;
  }
`;

export const ArtifactImage = styled.img`
  width: 110px;
  height: 110px;
  margin: 0 auto;

  @media screen and (max-width: 700px) {
    width: 70px;
    height: 70px;
  }

  @media screen and (max-width: 500px) {
    width: 45px;
    height: 45px;
  }
`;

export const SetBonusBold = styled.span`
  font-weight: bolder;
`;
