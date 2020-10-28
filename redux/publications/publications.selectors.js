import { createSelector } from 'reselect'

export const selectPublications = state => state.publications;

export const selectFacets = createSelector(
  [selectPublications],
  publications => publications.facets,
);
