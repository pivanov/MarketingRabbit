import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS'

export const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser: user
})

export const receiveSessionErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors: errors
})


// .then() takes as a second argument as a callback that is triggered if ajax request fails
// the response (when request fails) is an object that has a property by the name of responseJSON
// which we can use. Here, responseJSON is an array because that it what we set up in the backend
export const login = (user) => (dispatch) => (
  APIUtil.login(user)
    .then((user)=>dispatch(receiveCurrentUser(user)),
          (errors)=>dispatch(receiveSessionErrors(errors.responseJSON)))
);

export const logout = () => (dispatch) => (
  APIUtil.logout()
    .then((user)=>dispatch(receiveCurrentUser(null)),
          (errors)=>dispatch(receiveSessionErrors(errors.responseJSON)))
);

export const registerBusiness = (business) => (dispatch) => (
  APIUtil.registerBusiness(business)
    .then((user)=>dispatch(receiveCurrentUser(user)),
          (errors)=>dispatch(receiveErrors(errors.responseJSON)))
)

export const registerAgency = (agency) => (dispatch) => (
  APIUtil.registerAgency(agency)
    .then((user)=>dispatch(receiveCurrentUser(user)),
          (errors)=>dispatch(receiveErrors(errors.responseJSON)))
);
