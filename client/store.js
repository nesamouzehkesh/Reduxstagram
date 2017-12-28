import { createStore, applyMiddleware, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux'; //this hooks up react router with redux
import { browserHistory } from 'react-router'
import rootReducer from './reducers/index'; //where all your reducers are combined inside one file
import comments from './data/comments';
import posts from './data/posts';

/*
  Store

  Redux apps have a single store which takes
  1. All Reducers which we combined into `rootReducer`
  2. An optional starting state - similar to React's getInitialState
*/

// create an object for the default data
//we need to create a reducer for each of these states
const defaultState = {
  posts,
  comments
};

const store = createStore(rootReducer, defaultState);


/**
 * we export history because we need it in `reduxstagram.js` to feed into <Router>
 * syncHistoryWithStore is a function from react-router-redux that syncs the browser history with redux' store.
 *
 * plus: This library is not necessary for using Redux together with React Router.
 * You can use the two together just fine without any additional libraries.
 * It is useful if you care about recording, persisting, and replaying user actions,
 * using time travel. If you don't care about these features, just use Redux and React Router directly.
 */
export const history = syncHistoryWithStore(browserHistory, store);

/*
  Enable Hot Reloading for the reducers
  We re-require() the reducers whenever any new code has been written.
  Webpack will handle the rest
*/

if(module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
