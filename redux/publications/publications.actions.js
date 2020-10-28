import PublicationsActionTypes from './publications.types';

export const updateFacets = facets => ({
  type: PublicationsActionTypes.UPDATE_FACETS,
  payload: facets,
});

export const updatePublications = pubs => ({
  type: PublicationsActionTypes.UPDATE_PUBLICATIONS,
  payload: pubs,
});
