import React from 'react';
import { Route } from 'react-router-dom';
import SharedPageContainer from './businesses/shared_page_container';
import GreeingContainer from './greeting_container';
import { AuthRoute, BusinessProtectedRoute, ProtectedRoute} from '../util/route_util';
import AgencyRegistrationProcessContainer from './agencies/agency_registration_process_container';
import ServiceFormContainer from './dashboard/service_form_container';
import DashboardContainer from './dashboard/dashboard_container';
import HeaderContainer from './header_container';
import HomePage from './home_page'

const App = () => (
  <div id="app-container">
    <HeaderContainer/>
    <Route exact path="/" component={HomePage}/>
    <ProtectedRoute exact path="/dashboard" component={DashboardContainer}/>
    <AuthRoute exact path="/signup" component={SharedPageContainer} />
    <AuthRoute exact path="/login" component={SharedPageContainer} />
    <AuthRoute exact path="/register/agency" component={AgencyRegistrationProcessContainer} />
    <BusinessProtectedRoute exact path="/service-form" component={ServiceFormContainer} />
  </div>
);

export default App;
