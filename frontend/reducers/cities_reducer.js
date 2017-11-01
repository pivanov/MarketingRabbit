import { RECEIVE_CITIES } from '../actions/natives_actions'


const CitiesReducer = (state = [], action)=>{
  switch(action.type){
    case RECEIVE_CITIES:
      return action.cities
    default:
      return state
  }
}


export default CitiesReducer;
