import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import netWorth from './net-worth';

const netWorthApp = combineReducers({
  routing,
  netWorth
});

export default netWorthApp;
