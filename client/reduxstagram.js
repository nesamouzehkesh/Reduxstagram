/*
  Import Dependencies
*/
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import 'babel-polyfill';

/*
  Import Components
*/
import Main from './components/Main';
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
const router = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={PhotoGrid}></IndexRoute>
      <Route path="/view/:postId" component={Single}></Route>
    </Route>
  </Router>
)


/*
  Rendering
  This is where we hook up the Store with our actual component and the router
*/
render(router, document.getElementById('root'));

