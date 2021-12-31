import styled from "styled-components";

export const CharacterItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 6px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    transform: scale(1.04);
  }
`;

export const CharacterProfile = styled.img`
  width: 65px;
  height: 65px;
  margin: 0 auto;
`;

export const CharacterNameContainer = styled.span`
  color: white;
  text-shadow: 0 0 3px black;
  font-size: 13px;
`;

export const RoleStatement = styled.span`
  color: white;
  background: rgb(48,44,44);
  padding: 4px;
  margin: 2px 0;
  border-radius: 4px;
`