import * as types from './actionTypes';
import RepoApi from '../api/mockRepoApi';

export function addRepo(repo) {
  return { type: 'FIND_REPO', repo };
}

export function setUser(user) {
  return { type: 'SET_USER', user };
}

export function loadReposSuccess(repos) {
	return { type: 'LOAD_REPOS_SUCCESS', repos };
}

export function beginAjaxCall() {
  return { type: 'BEGIN_AJAX_CALL' };  
}

export function ajaxCallError() {
  return { type: 'AJAX_CALL_ERROR' };
}

export function setVisibilityFilter(filter) {
  return { type: 'SET_VISIBILITY_FILTER', filter };
}

// Local API call
// export function fetchRepos() {
//   return dispatch => {
//     dispatch(beginAjaxCall());
//   	return RepoApi.getAllRepos().then(repos => {
//   		dispatch(loadReposSuccess(repos));
//   	}).catch(error => {
//   		throw(error);
//   	});
//   };
// }

// let myHeaders = new Headers();
// myHeaders.append("ACCEPT", "application/vnd.github.VERSION.html");

// let init = { headers: myHeaders};

export const fetchRepos = (user) => dispatch => {
  dispatch(beginAjaxCall());
  return fetch(`https://api.github.com/users/${user}/repos`)
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
