import styled from "styled-components";

export const SearchBoxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  color: white;

  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

export const TitleSearch = styled.p`
  font-size: 24px;

  @media screen and (max-width: 700px) {
    font-size: 22px;
  }
`;

export const SearchBoxInputContainer = styled.div`
  align-self: center;
`;

export const SearchInputContainer = styled.input`
  border-radius: 8px;
  padding: 12px;
  background-color: rgb(49, 49, 49);
  border: none;
  color: white;
  font-size: 15px;

  @media screen and (max-width: 700px) {
    margin-bottom: 20px;
  }
`;
