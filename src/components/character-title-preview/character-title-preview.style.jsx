import styled from "styled-components";
import { FontColorVision } from "../../hoc/style";

export const CharacterTitlePreviewContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 4px;
`;

export const VisionImage = styled.img`
  width: 35px;
  height: 35px;
  align-self: center;

  @media screen and (max-width: 700px) {
    width: 28px;
    height: 28px;
  }
`;

export const CharacterTitle = styled.h2`
  font-size: 16px;
  margin-left: 5px;
  text-shadow: 0 0 2px black;
  ${FontColorVision};

  @media screen and (max-width: 700px) {
    font-size: 14px;
  }
`;
