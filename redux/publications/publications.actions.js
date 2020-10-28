import PublicationsActionTypes from './publications.types';

export const updatePublications = pubs => ({
  type: PublicationsActionTypes.UPDATE_PUBLICATIONS,
  payload: pubs,
});
