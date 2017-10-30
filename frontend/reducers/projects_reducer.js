import { RECEIVE_SINGLE_PROJECT, RECEIVE_ALL_PROJECTS } from '../actions/project_actions';

const ProjectsReducer = (state = {}, action)=>{
  switch(action.type){
    case RECEIVE_SINGLE_PROJECT:
      const newProject = action.project
      return Object.assign({}, state, {[newProject.id]: newProject})
    case RECEIVE_ALL_PROJECTS:
      return Object.assign({}, state, action.projects)
    default:
      return state
  }
}

export default ProjectsReducer
