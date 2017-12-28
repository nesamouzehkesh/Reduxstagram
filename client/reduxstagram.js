/*
  Import Dependencies
*/
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'; //the binding that allows us to use redux with react
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import 'babel-polyfill';

/*
  Import Components
*/
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

/* Import CSS */
import css from  './styles/style.styl';

/* Import our data store */
import store, { history } from './store';

/*
  Error Logging
*/

// import Raven from 'raven-js';
// import { sentry_url } from './data/config';
// if(window) {
//   Raven.config(sentry_url).install();
// }

/**
 * router returns Main with either Single or PhotoGrid
 */
/**
 * Provider exposes our store to our application
 */
const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path="/view/:postId" component={Single}></Route>
      </Route>
    </Router>
  </Provider>
)


/*
  Rendering
  This is where we hook up the Store with our actual component and the router
*/
/**
 * the render function is called any time the store state changes because the store is
 * subscribed to `render` function (I think inside the `createStore` implementation)
 */
render(router, document.getElementById('root'));

