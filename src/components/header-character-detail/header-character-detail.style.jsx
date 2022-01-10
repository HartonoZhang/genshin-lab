import styled from "styled-components";

export const HeaderCharacterDetailContainer = styled.div`
  color: white;
  padding: 20px 35px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  &.Pyro {
    background-color: #5f4847;
  }

  &.Cryo {
    background-color: #415a60;
  }

  &.Electro {
    background-color: #5d435f;
  }

  &.Hydro {
    background-color: #414b5f;
  }

  &.Anemo {
    background-color: #345d4e;
  }

  &.Geo {
    background-color: #5f5641;
  }

  @media screen and (max-width: 700px) {
    flex-direction: column;
    gap: 10px;
    padding: 10px 15px;
  }
`;


export const CharacterBiographyContainer = styled.div`
  display: flex;

  @media screen and (max-width: 700px) {
    margin: 0 auto;
  }
`;


export const CharacterRatingContainer = styled.div`
  display: flex;
  align-self: center;

  span {
    padding: 15px;
    border-radius: 5px;
    font-size: 25px;
    font-weight: bolder;
    text-shadow: 0 0 4px black;

    &.Pyro {
      background-color: #d96462;
    }

    &.Cryo {
      background-color: #42bfdd;
    }

    &.Electro {
      background-color: #cb4dd5;
    }

    &.Hydro {
      background-color: #4073d7;
    }

    &.Anemo {
      background-color: #00cd81;
    }

    &.Geo {
      background-color: #d9ab42;
    }
  }

  @media screen and (max-width: 700px) {
    span{
      font-size: 20px;
    }
  }

  @media screen and (max-width: 400px) {
    span{
      font-size: 16px;
    }
  }
`;
