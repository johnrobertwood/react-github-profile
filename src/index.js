import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { fetchRepos } from './actions/repoActions';
import routes from './routes';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { loadState, saveState } from './localStorage';

const persistedState = loadState();

const store = createStore(
  rootReducer, 
  persistedState, 
  applyMiddleware(thunk, reduxImmutableStateInvariant())
);

store.subscribe(() => {
  saveState(store.getState());
});

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
