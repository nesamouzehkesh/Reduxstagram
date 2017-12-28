import { combineReducers } from 'redux';

/*
  Reducers

  Reducers match up the dispatched (fired) action with a function that should be called.

  It takes in a copy of state, modifies it, and returns the new state
  When state gets large, it makes sense to have multiple reducers that only deal with a piece of the state

*/

import { routerReducer } from 'react-router-redux'; // we need this for react-router
import posts from './posts';
import comments from './comments';

// Combine all our reducers togeher
/**
 * the parameters are the reducers and also the changes in URLs, that is why `routing` should
 * also be passed as a parameter cuz that one should also be logged in our redux as well
 */

/**
 * Another point about reducers is that:
 * Every time an action is dispatched in your application `EVERY` single reducer is going
 * to run.
 */
const rootReducer = combineReducers({ posts, comments, routing: routerReducer });

export default rootReducer;
