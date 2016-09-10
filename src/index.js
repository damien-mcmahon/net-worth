import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import netWorthApp from './reducers';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import { syncHistoryWithStore } from 'react-router-redux';
import './index.css';
import Dashboard from './containers/dashboard';
import AddInstrument from './containers/add-instrument';

// thunk middleware wraps calls to be passed around the pipeline
const middleware = [thunk]; 
// create store and apply all middlewares that we want to
const store = createStore(netWorthApp, applyMiddleware(...middleware)); 
// create a history for the router which syncs with the store
const history = syncHistoryWithStore(browserHistory, store); 

ReactDOM.render(
  <Provider store={store}>
		<Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Dashboard} />
        <Route path="/add-instrument">
          <IndexRoute component={AddInstrument} />
        </Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
