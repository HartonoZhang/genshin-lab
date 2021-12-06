import styled from "styled-components";

export const CharacterPreviewContainer = styled.div`
  color: white;
  width: 100%;
`;

export const CharacterPreviewHeaderContainer = styled.div`
  margin: 8px 0;
  border-radius: 10px;

  &.pyro {
    background-color: #5f4847;
    border: 3px solid #d96462;
  }

  &.cryo {
    background-color: #415a60;
    border: 3px solid #42bfdd;
  }

  &.electro {
    background-color: #5d435f;
    border: 3px solid #cb4dd5;
  }

  &.hydro {
    background-color: #414b5f;
    border: 3px solid #4073d7;
  }

  &.anemo {
    background-color: #345d4e;
    border: 3px solid #00cd81;
  }

  &.geo {
    background-color: #5f5641;
    border: 3px solid #d9ab42;
  }
`;

export const CharacterPreviewItemContainer = styled.div`
  width: 100%;
  padding: 2px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border-radius: 15px;
`;
