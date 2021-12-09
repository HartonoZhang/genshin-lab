import { createSelector } from "reselect";

const selectArtifact = (state) => state.artifact;

export const selectListArtifact = createSelector([selectArtifact], (artifact) =>
  artifact ? artifact.listArtifact : ""
);

export const selectSearchFilterArtifact = createSelector(
  [selectArtifact],
  (artifact) => artifact ? artifact.searchArtifact : ""
);

export const isFetchingData = createSelector(
  [selectArtifact],
  (artifact) => artifact.isFetching
);
