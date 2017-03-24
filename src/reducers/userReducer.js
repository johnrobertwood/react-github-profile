import * as types from '../actions/actionTypes';

export default function userReducer(state = 'johnrobertwood', action) {
  switch(action.type) {
    case types.SET_USER:
      return action.user;

    default:
      return state;
  }
}