import React from 'react';
import ReactDOM from 'react-dom';
import * as APIUtil from './util/session_api_util.js';
import { login, logout, registerBusiness, registerAgency } from './actions/session_actions';
import configureStore from './store/store.js';
import Root from './components/root';
import * as APINativesUtil from './util/natives_api_util.js';
import * as APIProjectsUtil from './util/projects_api_util';
import * as projectsActions from './actions/project_actions';
import { fetchServices } from './actions/natives_actions'


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
  window.fetchServices = fetchServices;
  window.fetchProject = projectsActions.fetchProject;
  window.createProject = projectsActions.createProject;
  window.fetchProjects = projectsActions.fetchProjects;
  window.updateProject = projectsActions.updateProject;
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
