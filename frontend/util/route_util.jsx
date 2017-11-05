import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

// renders component if logged out, otherwise redirects to the root url
const Auth = ({component: Component, path, loggedIn}) => (
  <Route path={path} render={(props) => (
    !loggedIn ? (
      <Component {...props}/>
    ) : (
      <Redirect to="/dashboard" />
    )
  )}/>
);

// renders component if logged in, otherwise redirects to the login page
const Protected = ({component: Component, path, loggedIn}) => (
  <Route path={path} render={(props) => (
     loggedIn ? (
      <Component {...props}/>
    ) : (
      <Redirect to="/login"/>
    )
  )}/>
);

const BusinessProtected = ({component: Component, path, loggedIn, is_business}) => (
  <Route path={path} render={(props) => (
     (loggedIn && is_business) ? (
      <Component {...props}/>
    ) : (
      <Redirect to="/login"/>
    )
  )}/>
)

const AgencyProtected = ({component: Component, path, loggedIn, is_agency}) => (
  <Route path={path} render={(props) => (
     (loggedIn && is_agency) ? (
      <Component {...props}/>
    ) : (
      <Redirect to="/login"/>
    )
  )}/>
)

// access the Redux state to check if the user is logged in
const mapStateToProps = state => {
  let type = null;
  if(!!state.session.currentUser){
    type = state.session.currentUser.type
  }
  return {loggedIn: Boolean(state.session.currentUser),
          is_business: type == "Business",
          is_agency: type == "Agency"};
}

// connect Auth to the redux state
export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));

// connect Protected to the redux state
export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));


export const BusinessProtectedRoute = withRouter(connect(mapStateToProps, null)(BusinessProtected));

export const AgencyProtectedRoute = withRouter(connect(mapStateToProps, null)(AgencyProtected));
