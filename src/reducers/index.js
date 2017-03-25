import { combineReducers } from 'redux';
import repos from './repoReducer';
import user from './userReducer';

const rootReducer = combineReducers({
  repos,
  user
});

export default rootReducer;