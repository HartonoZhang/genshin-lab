import styled from "styled-components"

export const IconContainer = styled.div`
  line-height: 0;
  display: none;
  
  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 700px) {
    display: block;
  }
`