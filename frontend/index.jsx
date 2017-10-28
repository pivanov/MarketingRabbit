import React from 'react';
import ReactDOM from 'react-dom';
import * as APIUtil from './util/session_api_util.js';
import { login, logout, registerBusiness, registerAgency } from './actions/session_actions';
import configureStore from './store/store.js';
import Root from './components/root';
import * as APINativesUtil from './util/natives_api_util.js';


document.addEventListener("DOMContentLoaded", ()=>{
  // const store = configureStore();
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  // TESTING
  window.fetchIndustries = APINativesUtil.fetchIndustries;
  window.fetchSectors = APINativesUtil.fetchSectors;
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
