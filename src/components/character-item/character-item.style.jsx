import styled from "styled-components";

export const CharacterItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 6px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

export const CharacterProfile = styled.img`
  width: 65px;
  height: 65px;
`;

export const CharacterNameContainer = styled.span`
  color: white;
  text-shadow: 0 0 3px black;
  font-size: 13px;
`;
