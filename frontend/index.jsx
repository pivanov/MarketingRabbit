import React from 'react';
import ReactDOM from 'react-dom';
import * as APIUtil from './util/session_api_util.js';


document.addEventListener("DOMContentLoaded", ()=>{
  window.signup = APIUtil.signup;
  window.logout = APIUtil.logout;
  window.login = APIUtil.login;
  ReactDOM.render(<h1>Hello</h1>, document.getElementById('root'))
});
