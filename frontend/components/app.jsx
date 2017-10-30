import React from 'react';
import { Route } from 'react-router-dom';
import SharedPageContainer from './businesses/shared_page_container';
import GreeingContainer from './greeting_container';
import { AuthRoute, BusinessProtectedRoute } from '../util/route_util';
import AgencyRegisterSplashContainer from './agencies/agency_register_splash_container';
import ServiceFormContainer from './natives/service_form_container';

const App = () => (
  <div id="app-container">
    <h1> Marketing Rabbit </h1>
    <GreeingContainer />
    <AuthRoute exact path="/signup" component={SharedPageContainer} />
    <AuthRoute exact path="/login" component={SharedPageContainer} />
    <AuthRoute exact path="/register/agency" component={AgencyRegisterSplashContainer} />
    <BusinessProtectedRoute exact path="/service-form" component={ServiceFormContainer} />
  </div>
);

export default App;
