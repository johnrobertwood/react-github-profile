import * as types from '../actions/actionTypes';

export default function repoReducer(state = [], action) {
  switch(action.type) {
    case types.FIND_REPO:
      return [...state,
        Object.assign({}, action.repo)
      ];

    default:
      return state;
  }
}