import React from 'react';
import { Route } from 'react-router-dom';
import SharedPageContainer from './businesses/shared_page_container';
import GreeingContainer from './greeting_container';
import { AuthRoute } from '../util/route_util';
import AgencyRegisterSplashContainer from './agencies/agency_register_splash_container';

const App = () => (
  <div id="app-container">
    <h1> Marketing Rabbit </h1>
    <GreeingContainer />
    <AuthRoute exact path="/signup" component={SharedPageContainer} />
    <AuthRoute exact path="/login" component={SharedPageContainer} />
    <AuthRoute exact path="/bridge" component={SharedPageContainer}/>
    <AuthRoute exact path="/register/agency" component={AgencyRegisterSplashContainer} />
  </div>
);

export default App;
