import * as APIUtil from '../util/session_api_util';
import { receiveCurrentUser } from './session_actions'

export const RECEIVE_REGISTRATION_ERRORS = 'RECEIVE_REGISTRATION_ERRORS'

export const receiveRegistrationErrors = (errors) => ({
  type: RECEIVE_REGISTRATION_ERRORS,
  errors: errors
})

export const registerBusiness = (business) => (dispatch) => (
  APIUtil.registerBusiness(business)
    .then((user)=>dispatch(receiveCurrentUser(user)),
          (errors)=>dispatch(receiveRegistrationErrors(errors.responseJSON)))
)

export const registerAgency = (agency) => (dispatch) => (
  APIUtil.registerAgency(agency)
    .then((user)=>dispatch(receiveCurrentUser(user)),
          (errors)=>dispatch(receiveRegistrationErrors(errors.responseJSON)))
);
