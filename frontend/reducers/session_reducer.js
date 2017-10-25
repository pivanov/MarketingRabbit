import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';

const initial_state = {
  currentUser: null
}

const SessionReducer = (state = initial_state, action)=>{
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      return merge({}, {currentUser: action.currentUser})
    default:
      return state
  }
}


export default SessionReducer
