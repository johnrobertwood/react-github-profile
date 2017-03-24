import { combineReducers } from 'redux';
import repos from './repoReducer';
import users from './userReducer';

const rootReducer = combineReducers({
  repos,
  users
});

export default rootReducer;