import React from 'react';
import ReactDOM from 'react-dom';
import * as APIUtil from './util/session_api_util.js';
import { login, logout, registerBusiness, registerAgency } from './actions/session_actions'
import configureStore from './store/store.js'
import Root from './components/root'


document.addEventListener("DOMContentLoaded", ()=>{
  const store = configureStore();
  // TESTING
  window.registerBusiness = APIUtil.registerBusiness;
  window.logout = logout;
  window.login = login;
  window.registerBusiness = registerBusiness;
  window.registerAgency = registerAgency;
  window.store = store;
  window.dispatch = store.dispatch;
  window.getState = store.getState;
  // END
  ReactDOM.render(<Root store={store}/>, document.getElementById('root'))
});
