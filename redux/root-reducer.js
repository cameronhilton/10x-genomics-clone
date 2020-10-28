import { combineReducers } from 'redux';
import publicationsReducer from './publications/publications.reducer';

const rootReducer = combineReducers({
  publications: publicationsReducer,
});

export default rootReducer;
