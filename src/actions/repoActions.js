import * as types from './actionTypes';

export function addRepo(repo) {
  return { 
    type: 'FIND_REPO', 
    repo
  };
}

export function setUser(user) {
  return {
  	type: 'SET_USER',
  	user
  };
}

