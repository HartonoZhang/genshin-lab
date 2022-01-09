import styled, { css } from "styled-components";

const DefaultFilterTypeStyle = css`
  opacity: 0.7;
`;

const ActiveFilterTypeStyle = css`
  opacity: 1;
  background-color: #414141;
`;

const CheckActive = ({ isActive }) => {
  return isActive ? ActiveFilterTypeStyle : DefaultFilterTypeStyle;
};

export const FilterTypeItemContainer = styled.div`
  display: flex;
  margin: 6px;
  transition: 0.4s;
  border-radius: 10px;
  padding: 2px;
  ${CheckActive}

  &:hover {
    cursor: pointer;
    opacity: 1;
    background-color: #414141;
  }
`;

export const TypeItemImage = styled.img`
  width: 50px;
  height: 50px;

  @media screen and (max-width: 700px) {
    width: 36px;
    height: 36px;
  }
`;
