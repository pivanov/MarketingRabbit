import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS'

export const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser: user
})

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors: errors
})

export const login = (user) => (dispatch) => (
  APIUtil.login(user)
    .then((user)=>dispatch(receiveCurrentUser(user)),
          (errors)=>dispatch(receiveErrors(errors)))
);

export const logout = () => (dispatch) => (
  APIUtil.logout()
    .then((user)=>dispatch(receiveCurrentUser(null)),
          (errors)=>dispatch(receiveErrors(null)))
);

export const registerBusiness = (business) => (dispatch) => (
  APIUtil.registerBusiness(business)
    .then((user)=>dispatch(receiveCurrentUser(user)),
          (errors)=>dispatch(receiveErrors(errors)))
)

export const registerAgency = (agency) => (dispatch) => (
  APIUtil.registerAgency(agency)
    .then((user)=>dispatch(receiveCurrentUser(user)),
          (errors)=>dispatch(receiveErrors(errors)))
);
