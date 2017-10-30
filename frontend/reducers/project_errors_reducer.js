import { RECEIVE_PROJECT_ERRORS, RECEIVE_SINGLE_PROJECT, RECEIVE_ALL_PROJECTS } from '../actions/project_actions';

const ProjectErrorsReducer = (state = [], action)=>{
  switch(action.type){
    case RECEIVE_PROJECT_ERRORS:
      return action.errors
    case RECEIVE_SINGLE_PROJECT:
      return []
    case RECEIVE_ALL_PROJECTS:
      return []
    default:
      return state
  }
}


export default ProjectErrorsReducer
