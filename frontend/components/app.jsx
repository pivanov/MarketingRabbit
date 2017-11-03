import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SharedPageContainer from './businesses/shared_page_container';
import { AuthRoute, BusinessProtectedRoute, ProtectedRoute} from '../util/route_util';
import AgencyRegistrationProcessContainer from './agencies/agency_registration_process_container';
import ServiceFormContainer from './dashboard/service_form_container';
import DashboardHome from './dashboard/dashboard_home';
import HomePage from './home_page';
import HeaderContainer from './header_container';
import ProjectsPageContainer from './dashboard/projects_page_container';

const App = () => (
  <div id="app-container">
    <HeaderContainer/>
    <Switch>
      <AuthRoute exact path="/" component={HomePage}/>
      <AuthRoute exact path="/signup" component={SharedPageContainer} />
      <AuthRoute exact path="/login" component={SharedPageContainer} />
      <AuthRoute exact path="/register/agency" component={AgencyRegistrationProcessContainer} />
    </Switch>
    <Switch>
      <ProtectedRoute exact path="/dashboard" component={DashboardHome}/>
      <BusinessProtectedRoute exact path="/dashboard/projects" component={ProjectsPageContainer}/>
      <BusinessProtectedRoute exact path="/dashboard/projects/new" component={ServiceFormContainer}/>
    </Switch>
  </div>
);

export default App;
