import styled from "styled-components";

export const HeaderDropdownContainer = styled.div`
  position: absolute;
  display: none;
  border: 1px solid black;
  background-color: rgb(49, 49, 49);
  top: 60px;
  right: 0;
  left: 0;
  z-index: 5;
  width: 100%;
  text-align: center;
  justify-content: center;
  line-height: 50px;

  @media screen and (max-width: 700px) {
    display: block;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
