import { RECEIVE_INDUSTRIES } from '../actions/natives_actions'


const IndustriesReducer = (state = [], action)=>{
  switch(action.type){
    case RECEIVE_INDUSTRIES:
      return action.industries
    default:
        return state
  }
}

export default IndustriesReducer;
