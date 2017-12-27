/**
 * we create reducers for every single piece of state that we have; This is why we
 * have arranged our reducers in separate files; However in the end we need to have
 * only one reducer file such as `rootReducer` that we give to our store.
 */

/**
 * Reducer does 2 things:
 * 1. it takes and action
 * 2. makes a copy of the current state in store
 * 3. returns the next state
 */


export function comments(state = [], action) {
  console.log(state, action);
  return state;
}

export default comments;