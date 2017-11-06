import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SharedPageContainer from './businesses/shared_page_container';
import { AuthRoute, BusinessProtectedRoute, ProtectedRoute, AgencyProtectedRoute} from '../util/route_util';
import AgencyRegistrationProcessContainer from './agencies/agency_registration_process_container';
import AgencyRegisterSplashPage from './agencies/agency_register_splash_page';
import ServiceFormContainer from './dashboard/service_form_container';
import DashboardHome from './dashboard/dashboard_home';
import HomePageContainer from './home_page_container';
import HeaderContainer from './header_container';
import ProjectsPageContainer from './dashboard/projects_page_container';
import ProjectShowContainer from './dashboard/project_show_container';
import AvailableProjectsContainer from './dashboard/available_projects_container';
import AgencySearchPageContainer from './agency_search/agency_search_page_container';

const App = () => (
  <div id="app-container">
    <HeaderContainer/>
    <Switch>
      <AuthRoute exact path="/agency-search/:serviceId" component={AgencySearchPageContainer}/>
      <AuthRoute exact path="/" component={HomePageContainer}/>
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
      <AgencyProtectedRoute exact path="/dashboard/available-projects" component={AvailableProjectsContainer} />
    </Switch>
  </div>
);

export default App;
