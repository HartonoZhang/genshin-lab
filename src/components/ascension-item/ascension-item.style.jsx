import styled from "styled-components";
import { HeaderAscensionStyle } from "../header-ascension-detail/header-ascension-detail.style";

export const AscensionItemContainer = styled.div`
  ${HeaderAscensionStyle}
  background-color: rgb(56,51,51);
  padding: 12px 8px;
  border: 1px solid #bea4a4;
  align-items: center;

  @media screen and (max-width: 700px) {
    font-size: 14px;
    padding: 4px;
  }
`