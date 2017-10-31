import { RECEIVE_SERVICES } from '../actions/natives_actions'


const ServicesReducer = (state = [], action)=>{
  switch(action.type){
    case RECEIVE_SERVICES:
      return action.services
    default:
        return state
  }
}

export default ServicesReducer;
