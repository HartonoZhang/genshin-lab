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
    padding: 5px;
  }
`

export const ArtifactTextColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  margin: 0 auto;
`;

export const ArtifactName = styled.span`
  margin-top: 4px;
`;

export const ArtifactImage = styled.img`
  width: 110px;
  height: 110px;
  margin: 0 auto;
`;

export const SetBonusBold = styled.span`
  font-weight: bolder;
`;