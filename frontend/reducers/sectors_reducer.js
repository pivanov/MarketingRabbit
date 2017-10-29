import { RECEIVE_SECTORS } from '../actions/natives_actions'


const SectorsReducer = (state = [], action)=>{
  switch(action.type){
    case RECEIVE_SECTORS:
      return action.sectors
    default:
        return state
  }
}

export default SectorsReducer;
