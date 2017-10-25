import React from 'react';
import ReactDOM from 'react-dom';
import * as APIUtil from './util/session_api_util.js';
import configureStore from './store/store.js'

document.addEventListener("DOMContentLoaded", ()=>{
  const store = configureStore();
  window.registerBusiness = APIUtil.registerBusiness;
  window.logout = APIUtil.logout;
  window.login = APIUtil.login;
  window.store = store;
  window.dispatch = store.dispatch;
  window.getState = store.getState;
  ReactDOM.render(<h1>Hello</h1>, document.getElementById('root'))
});
