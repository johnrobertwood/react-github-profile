import { combineReducers } from 'redux';
import ajaxCallsInProgress from './ajaxStatusReducer';
import repos from './repoReducer';
import user from './userReducer';
import visibilityFilter from './visibilityFilter';

const rootReducer = combineReducers({
  ajaxCallsInProgress,
  repos,
  user,
  visibilityFilter
});

export default rootReducer;