import styled from "styled-components";

export const CharacterProfileContainer = styled.div`
  position: relative;
`;

export const CharacterImage = styled.img`
  width: 90px;
  height: 90px;

  @media screen and (max-width: 700px) {
   width: 70px;
   height: 70px;
  }
`;

export const VisionImage = styled.img`
  width: 30px;
  height: 30px;
  position: absolute;
  right: -10px;
  background-color: #273530;
  padding: 3px;
  border-radius: 50%;
`;