import * as types from './actionTypes';
import RepoApi from '../api/mockRepoApi';

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

export function loadReposSuccess(repos) {
	return { type: types.LOAD_REPOS_SUCCESS, repos};
}

// Local API call
// export function fetchRepos() {
//   return dispatch => {
//   	return RepoApi.getAllRepos().then(repos => {
//   		dispatch(loadReposSuccess(repos));
//   	}).catch(error => {
//   		throw(error);
//   	});
//   };
// }

let myHeaders = new Headers();
myHeaders.append("ACCEPT", "application/vnd.github.VERSION.html");

let init = { headers: myHeaders};

export const fetchRepos = (user) => dispatch => {
  return fetch(`https://api.github.com/users/${user}/repos`, init)
    .then(response => response.json())
    .then(json => dispatch(loadReposSuccess(json)));
    // .catch(error => console.log(error));
};

// export const fetchRepoDetail = (user, repo) => dispatch => {
//   return fetch(`https://api.github.com/repos/${user}/${repo}`, init)
//     .then(response => response.json())
//     .then(json => dispatch(loadReposSuccess(json)));
//     // .catch(error => console.log(error));
// };
