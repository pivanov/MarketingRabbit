import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SharedPageContainer from './businesses/shared_page_container';
import { AuthRoute, BusinessProtectedRoute, ProtectedRoute} from '../util/route_util';
import AgencyRegistrationProcessContainer from './agencies/agency_registration_process_container';
import AgencyRegisterSplashPage from './agencies/agency_register_splash_page';
import ServiceFormContainer from './dashboard/service_form_container';
import DashboardHome from './dashboard/dashboard_home';
import HomePage from './home_page';
import HeaderContainer from './header_container';
import ProjectsPageContainer from './dashboard/projects_page_container';
import ProjectShowContainer from './dashboard/project_show_container';
import AvailableProjectsContainer from './dashboard/available_projects_container'

const App = () => (
  <div id="app-container">
    <HeaderContainer/>
    <Switch>
      <AuthRoute exact path="/" component={HomePage}/>
      <AuthRoute exact path="/signup" component={SharedPageContainer} />
      <AuthRoute exact path="/login" component={SharedPageContainer} />
      <AuthRoute exact path="/register-agency" component={AgencyRegisterSplashPage} />
      <AuthRoute exact path="/register-agency/form" component={AgencyRegistrationProcessContainer} />
    </Switch>
    <Switch>
      <ProtectedRoute exact path="/dashboard" component={DashboardHome}/>
      <BusinessProtectedRoute exact path="/dashboard/projects" component={ProjectsPageContainer}/>
      <BusinessProtectedRoute exact path="/dashboard/projects/new" component={ServiceFormContainer}/>
      <BusinessProtectedRoute exact path="/dashboard/projects/:projectId" component={ProjectShowContainer}/>
      <ProtectedRoute exact path="/dashboard/available-projects" component={AvailableProjectsContainer} />
    </Switch>
  </div>
);

export default App;
