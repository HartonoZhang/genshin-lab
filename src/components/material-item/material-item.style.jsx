import styled from "styled-components";

export const MaterialItemContainer = styled.div`
  display: flex;
  text-align: left;
  align-items: center;
  margin: 0 40px;

  img {
    width: 40px;
    height: 40px;
  }

  span{
    margin-left: 8px;
  }

  @media screen and (max-width: 700px) {
    img {
      width: 30px;
      height: 30px;
    }

    span {
      font-size: 13px;
    }

    margin: 10px;
  }
`;
