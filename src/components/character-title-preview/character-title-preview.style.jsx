import styled from "styled-components";

export const CharacterTitlePreviewContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 4px;
`;

export const VisionImage = styled.img`
  width: 35px;
  height: 35px;
  align-self: center;
`;

export const CharacterTitle = styled.h2`
  font-size: 16px;
  margin-left: 5px;
  text-shadow: 0 0 2px black;

  &.pyro {
    color: #d96462;
  }

  &.cryo {
    color: #42bfdd;
  }

  &.electro {
    color: #cb4dd5;
  }

  &.hydro {
    color: #4073d7;
  }

  &.anemo {
    color: #00cd81;
  }

  &.geo {
    color: #d9ab42;
  }
`;
