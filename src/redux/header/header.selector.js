import { createSelector } from "reselect";

const selectHeader = state => state.header;

export const selectDrodownHeader = createSelector(
  [selectHeader],
  (header) => header.hidden
)