import styled, { css } from "styled-components";

const displayDefaultStyling = css`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const CharacterDetailTeamsContainer = styled.div`
  margin-top: 15px;
  ${displayDefaultStyling}
`;

export const CharacterDetailTeamsOverviewContainer = styled.div`
  ${displayDefaultStyling}
  gap: 10px;
`;
