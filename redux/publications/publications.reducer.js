import PublicationsActionTypes from './publications.types';

const INITIAL_STATE = {
  facets: {},
};

const publicationsReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case(PublicationsActionTypes.UPDATE_PUBLICATIONS):
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state;
  };
};

export default publicationsReducer;
